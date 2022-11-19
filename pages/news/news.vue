<template>
	<view>
		<view :style="{height: cheight}" class="computedBox">
			<!-- 显式计算
			<view>
				{{diffAverage}}
			</view>
			<view>
				{{lastDiff}}
			</view>
			<view>
				{{allDiff}}
			</view> -->
			<!-- <ProgressBar :Width="60" Type="sparkle" :Vice="false" :main="false"></ProgressBar> -->
			<!-- <u-line-progress :percentage="(allDiff/300)*100" :showText="false"></u-line-progress> -->
			<u-toast ref="uToast"></u-toast>
			<view>
				<u-grid :border="true" col="2">
					<u-grid-item>
				        <view>
							<!-- <arprogress :percent="(allDiff/300)*100"><text>{{parseInt((allDiff/300)*100)}}%</text></arprogress> -->
							<arprogress :percent="(allDiff/topDiff)*100 >= 100 ? 100 : (allDiff/topDiff)*100"><text></text></arprogress>
							<u--text text="阅读进度" align="center"></u--text>
				        	<!-- <vus-sphere-progress :percent="(allDiff/300)*100" :text="false"></vus-sphere-progress> -->
				        </view>
				    </u-grid-item>
					<u-grid-item>
						<view>
							<!-- 传递 分界值  vus-sphere-progress 里定义了分界点-->
							<vus-sphere-progress :percent="((lastDiff)/6)*1" :text="false"></vus-sphere-progress>
							<u--text text="当前状态" align="center"></u--text>
						</view>
					</u-grid-item>
				</u-grid>
			</view>
		</view>
		<view>
			<swiper vertical duration="200" @change="loadMore" :style="{height: nheight}">
				<block v-for="(item,index) in slide" :key="index">
						<swiper-item>
							<view :style="{height: nheight}">
								<view class="news">
									<u--text :text="item.title" size="18px"></u--text>
									<!-- <u-divider text="分割线"></u-divider> -->
									<!-- <view style="background-color: #00D6B2;">{{item.title}}</view> -->
									<u-line color="#2979ff" style="margin-top: 20rpx;margin-bottom: 20rpx;"></u-line>
									<u--text :text="item.summary" size="14px"></u--text>
									<!-- <view style="background-color: #5AC725;">{{item.summary}}</view> -->
									<!-- <u-divider text="分割线"></u-divider> -->
								</view>
							</view>
						</swiper-item>
				</block>
			</swiper>
		</view>
	</view>
</template>

<script>
	import {client} from "../../utils/utils.js"
	import vueSphereProgress from '../../components/vus-sphere-progress/vus-sphere-progress.vue'
	export default {
		data() {
			return {
				page: 0,
				newsList: [],
				news: [],
				slide: [],
				diff: [],
				topDiff: 300,
				lastDiff: 0,
				readSpan: [],
				sysheight: 0,
				nheight: "",
				cheight: "",
				width: 0,
				summary: '24.53f55e24cb8fd9d17131131c5a48194d.2592000.1670671862.282335-25817387',
				local: '127.0.0.1:8000',
				remote: '119.91.196.208'
			}
		},
		computed: {
			diffAverage: function() {
				var all = 0;
				for(var i = 0; i < this.diff.length; i++){
					all += this.diff[i]
				}
				return all/this.diff.length
			},
			allDiff: function(){
				var all = 0;
				for(var i = 0; i < this.diff.length; i++){
					all += this.diff[i]
				}
				return all
			}
		},
		watch: {
			readSpan: {
				handler(newV, oldV){
					// console.log("-----------------")
					var end = this.readSpan.length - 1
					var start = end - 6 > -1 ? end -6 : 0
					var span = this.readSpan.slice(start, end + 1)
					// console.log(span)
					this.computedDiff(span)
				}
			},
			allDiff: {
				handler(newV, oldV){
					// console.log(newV, oldV)
					if (parseInt(newV) >= this.topDiff){
						
						this.$refs.uToast.show({
											type: 'error',
											message: "达到阅读上限，请注意休息",
											complete() {
												this.allDiff = 0
											}
										})
					}
					
				}
			}
		},
		async onLoad() {
			this.sysheight = uni.getSystemInfoSync().windowHeight
			var newsHeight = 0.8 * this.sysheight
			var computedHeight = 0.2 * this.sysheight
			this.nheight = `${newsHeight}px` 
			this.cheight = `${computedHeight}px` 
			let width = uni.getSystemInfoSync().windowWidth 
			this.width = `${width}px` 
			this.page = this.page + 1
			// uni.request({
			// 	url: 'http://news.api.bdymkt.com/news?needContent=1',
			// 	method: 'POST',
			// 	data:{
			// 		'needContent': '1',
			// 		'page': this.page,
			// 		'maxResult': "50"
			// 	},
			// 	header:{
			// 		'X-Bce-Signature': 'AppCode/c393cf60427041559d459c3f9e8a7ecc',
			// 		// 'content-type': ' application/x-www-form-urlencoded;application/json；charset:utf-8',
			// 		'content-type': 'application/json; charset:utf-8',
			// 		// 'cache-control':'no-cache',
			// 		// 'Access-Control-Allow-Headers': 'appId',
			// 		// 'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
			// 		// 'Access-Control-Max-Age': 86400,
			// 		'Access-Control-Allow-Origin':'*',
			// 		'Access-Control-Allow_Credentials': 'true',
			// 		'Access-Control-Allow-Headers':'Authorization,Accept,Origin,DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Content-Range,Range',
			// 		'Access-Control-Allow-Methods':'GET,POST,OPTIONS,PUT,DELETE,PATCH',
			// 		// 'withCredentials': true
			// 	},
			// 	success: (result) => {
			// 		console.log(result)
			// 		this.newsList = [...this.newsList, ...result.data.showapi_res_body.pagebean.contentlist]
			// 		this.buildNews()
			// 	}
			// })
			
			// 易源新闻 官网
			var result = await uni.request({
				url: 'http://route.showapi.com/109-35?showapi_appid=1236507&showapi_sign=0959e62dc7ad414c91b9333a69606472&needContent=1',
				// url: 'http://route.showapi.com/109-35',
				method: 'POST',
				data:{
					'needContent': '1',
					'page': this.page,
					'maxResult': "100",
					'showapi_appid': '1236507',
					'showapi_sign': '0959e62dc7ad414c91b9333a69606472'
				},
				header:{
					'content-type': 'application/json; charset:utf-8',
					'Access-Control-Allow-Origin':'*',
					'Access-Control-Allow_Credentials': 'true',
					'Access-Control-Allow-Headers':'Authorization,Accept,Origin,DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Content-Range,Range',
					'Access-Control-Allow-Methods':'GET,POST,OPTIONS,PUT,DELETE,PATCH',
				}
				// ,
				// success: (result) => {
				// 	console.log(result)
				// 	this.newsList = [...this.newsList, ...result.data.showapi_res_body.pagebean.contentlist]
				// 	this.buildNews()
				// }
			})
			
			console.log(result)
			
			this.newsList = [...this.newsList, ...result[1].data.showapi_res_body.pagebean.contentlist]
			
			this.page = this.page + 1
			
			// 易源新闻 官网
			var result = await uni.request({
				url: 'http://route.showapi.com/109-35?showapi_appid=1236507&showapi_sign=0959e62dc7ad414c91b9333a69606472&needContent=1',
				// url: 'http://route.showapi.com/109-35',
				method: 'POST',
				data:{
					'needContent': '1',
					'page': this.page,
					'maxResult': "100",
					'showapi_appid': '1236507',
					'showapi_sign': '0959e62dc7ad414c91b9333a69606472'
				},
				header:{
					'content-type': 'application/json; charset:utf-8',
					'Access-Control-Allow-Origin':'*',
					'Access-Control-Allow_Credentials': 'true',
					'Access-Control-Allow-Headers':'Authorization,Accept,Origin,DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Content-Range,Range',
					'Access-Control-Allow-Methods':'GET,POST,OPTIONS,PUT,DELETE,PATCH',
				}
				// ,
				// success: (result) => {
				// 	console.log(result)
				// 	this.newsList = [...this.newsList, ...result.data.showapi_res_body.pagebean.contentlist]
				// 	this.buildNews()
				// }
			})
			
			this.newsList = [...this.newsList, ...result[1].data.showapi_res_body.pagebean.contentlist]
			
			this.buildNews()
			
		},
		methods: {
			computedDiff (sequence) {
				// console.log(sequence.length)
				if(sequence.length < 2){
					return
				}
				var titleSequence = []
				for(var i = 0; i < sequence.length; i++){
					titleSequence.push(sequence[i].title)
				}
				// console.log(titleSequence)
				uni.request({
					url: 'http://'
					+
					this.remote
					+
					'/cos_predict_one_sequence/',
					method: 'POST',
					data: {
						'sentences_list': titleSequence,
					},
					header:{
						'content-type': 'application/json; charset=utf-8',
					},
					success: res => {
						// console.log(res)
						this.diff.push(res.data.predict)
						this.lastDiff = res.data.predict
						console.log(this.diff)
						console.log(this.lastDiff)
					}
				})
			},
			async loadMore(e){
				// console.log(e.detail.current)
				var current = e.detail.current
				var start = this.slide.length
				
				console.log("current: " + current)
				console.log("start: "+ start)
				console.log("slide: " + this.slide.length)
				console.log("news: " + this.news.length)
				console.log("page: " + this.page)
				
				this.readSpan.push(this.slide[current])

				if(current === this.slide.length - 5){
					
					if(this.slide.length >= this.news.length - 30){
						this.page = this.page + 1
						console.log("page: " + this.page)
						// var data = await uni.request({
						// 	url: 'http://news.api.bdymkt.com/news?needContent=1',
						// 	method: 'POST',
						// 	data:{
						// 		'needContent': "1",
						// 		'page': this.page,
						// 		'maxResult': "50"
						// 	},
						// 	header:{
						// 		'X-Bce-Signature': 'AppCode/c393cf60427041559d459c3f9e8a7ecc',
						// 		'content-type': 'application/x-www-form-urlencoded; charset=utf-8',
						// 	}
						// })
						
						// 易源新闻 官网
						var data = await uni.request({
								url: 'http://route.showapi.com/109-35?showapi_appid=1236507&showapi_sign=0959e62dc7ad414c91b9333a69606472&needContent=1',
								// url: 'http://route.showapi.com/109-35',
								method: 'POST',
								data:{
									'needContent': '1',
									'page': this.page,
									'maxResult': "50",
									'showapi_appid': '1236507',
									'showapi_sign': '0959e62dc7ad414c91b9333a69606472'
								},
								header:{
									'content-type': 'application/json; charset:utf-8',
									'Access-Control-Allow-Origin':'*',
									'Access-Control-Allow_Credentials': 'true',
									'Access-Control-Allow-Headers':'Authorization,Accept,Origin,DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Content-Range,Range',
									'Access-Control-Allow-Methods':'GET,POST,OPTIONS,PUT,DELETE,PATCH',
								}
								// ,
								// success: (result) => {
								// 	console.log(result)
								// 	this.newsList = [...this.newsList, ...result.data.showapi_res_body.pagebean.contentlist]
								// 	this.buildNews()
								// }
							})
						
						// console.log(data)
						
						var content = data[1].data.showapi_res_body.pagebean.contentlist;
						var startIndex = this.newsList.length ? this.newsList.length : 0;
						this.newsList = this.newsList.concat(content);
						// console.log(data)
						for(let i = startIndex; i < this.newsList.length;i++){
							
							// if((this.newsList[i].content === null) | (this.newsList[i].title === null)){
							// 	continue
							// }
							
							// console.log("i: " + i)
							var content = this.newsList[i].content;
							var title = this.newsList[i].title;
							var options = {};
							options["title"] = title;
							// console.log("content:" + content)
							// console.log("title: "+ title)
							// console.log(this.newsList)
							if(title.length > 0 & content.length > 1 & content.length < 3000){
								var res = await uni.request({
									url: 'https://aip.baidubce.com/rpc/2.0/nlp/v1/news_summary?access_token='
									+
									this.summary
									+
									'&charset=UTF-8',
									method: 'POST',
									data:{
										'content': content,
										'title': title,
										'max_summary_len': 200
									},
									header: {
										'content-type': 'application/json',
									}
								});
								
								// console.log("for 摘要： " + res[1])
								
								if (res[1].data.summary!==null & res[1].data.summary.length!==null & res[1].data.summary.length > 50){
									this.news.push({
											'id': i,
											'title': title,
											'summary': res[1].data.summary
									})
								};
							}
						}
						// console.log(this.news.length)
					}
					
					console.log("slide: ")
					console.log(this.slide)
					
					this.slide = this.slide.concat(this.news.slice(start, start + 20))
					
					console.log("news: ")
					console.log(this.news)
					
					// for(var i = start; i < start + 20 & i < this.news.length; i++){
					// 	this.slide.push(this.news[i])
					// 	console.log(this.news)
					// 	console.log(this.slide)
					// }
				}
			},
			async buildNews() {
				var startIndex = this.news.length ? this.news.length : 0
				for(let i = startIndex; i < this.newsList.length;i++){
					
					// if((this.newsList[i].content == null) | (this.newsList[i].title === null)){
					// 	continue
					// }
					
					var content = this.newsList[i].content
					// console.log(this.newsList)
					var title = this.newsList[i].title
					var options = {};
					options["title"] = title
					console.log("title: " + title)
					// console.log("content: " + content)
					if(title.length > 0 & content.length > 1 & content.length < 3000){
						var res = await uni.request({
							url: 'https://aip.baidubce.com/rpc/2.0/nlp/v1/news_summary?access_token='
							+
							this.summary
							+
							'&charset=UTF-8',
							method: 'POST',
							data:{
								'content': content,
								'title': title,
								'max_summary_len': 200
							},
							header: {
								'content-type': 'application/json',
							}
						})
						// console.log(res)
						if (res[1].data.summary.length > 20){
							this.news.push({
									'id': i,
									'title': title,
									'summary': res[1].data.summary
							})
						}
					}
				}
				// var start = this.slide.length
				// this.slide = this.slide.concat(this.news.slice(start, start + 20))
				this.slide = this.slide.concat(this.news)
				// console.log(this.slide.length)
				console.log(this.slide)
			}
		}
	}
</script>

<style scoped>
    .u-content {
        padding: 24rpx;
    }
	.swiper {
		/* height: 800rpx; */
		height: 80%;
		background-color: #8A6343;
		
	}
	.slide {
		height: 800px;
		background-color: #8A6343;
	}
	.news {
		margin-top: 20%;
		margin-bottom: 50%;
		margin-left: 5%;
		margin-right: 5%;
	}
	.computedBox {
		background-color: #ffffff;
		padding-top: 5%;
	}
</style>