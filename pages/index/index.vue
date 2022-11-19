<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
			<text class="u-line-1">是日也，天朗气清，惠风和畅，仰观宇宙之大，俯察品类之盛</text>
		</view>
		<view>{{vuex_version}}</view>
		<view>{{vuex_user.name}}</view>
		<u-button @click="modifyVuex">修改变量</u-button>
		<!-- <u-button @click="getNewsa">获取新闻</u-button> -->
		<u-cell-group>
			<u-cell icon="setting-fill" title="个人设置"></u-cell>
			<u-cell icon="integral-fill" title="会员等级" value="新版本"></u-cell>
		</u-cell-group>
	</view>
</template>

<script>
	import {getNews} from '@/config/api.js'
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {
			// uni.request({
			// 	url: 'https://unidemo.dcloud.net.cn/api/news',
			// 	success: (result) => {
			// 		console.log(result)
			// 		}
			// 	})
			// uni.request({
			// 	url: 'http://v.juhe.cn/toutiao/index?type=top&key=63e27f99441e59aa56737af53868c03c',
			// 	success: (res) => {
			// 		console.log(res)
			// 	}
			// })
			uni.request({
				url: 'http://news.api.bdymkt.com/news',
				header:{
					'X-Bce-Signature': 'bce-auth-v1/ea76fbe3d2514b4c9176a5d7c4ebe914/2022-03-21T15:50:26Z/1800/host/3d422eb55789dd39ea9111f3d8855788d7da91672cb406614501e0c4421a5efc',
					'content-type': 'application/x-www-form-urlencoded',
					'withCredentials': true
				},
				success: (result) => {
					console.log(result)
					}
				})
		},
		methods: {
			modifyVuex() {
				this.$u.vuex('vuex_version', '1.0.1');
				// 修改对象的形式，中间用"."分隔
				this.$u.vuex('vuex_user.name', '诗圣');
			},
			getNewsa(){
				getNews().then(res => {
					console.log(res)
				})
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
