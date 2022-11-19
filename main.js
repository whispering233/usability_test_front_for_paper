import Vue from 'vue'
import App from './App'

// 假设您项目中已使用VueX
import store from '@/store'
// Vue.prototype.$store = store

Vue.config.productionTip = false
App.mpType = 'app'

// 引入全局uView
import uView from '@/uni_modules/uview-ui'
Vue.use(uView)

// 圆环进度条组件
import arprogress from '@/components/ar-circle-progress/index.vue'
Vue.component('arprogress', arprogress);

// 动画进度条组件
import ProgressBar from '@/components/Progress-Bar/Progress-Bar';
Vue.component('ProgressBar', ProgressBar);

let vuexStore = require("@/store/$u.mixin.js");
Vue.mixin(vuexStore);

// import mixin from './common/mixin'
// Vue.mixin(mixin)

const app = new Vue({
	store,
	...App
})

// 引入请求封装，将app参数传递到配置中
require('@/config/request.js')(app)

app.$mount()