import Vue from 'vue'
import App from './App'
import store from './store/index.js'

//把vuex定义成全局组件
Vue.prototype.$store = store;
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App,
	//挂载store
	store
})
app.$mount()
