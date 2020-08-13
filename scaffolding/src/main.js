import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//import qs from 'qs'

//引入axios模块
import axios from 'axios'
//引入moment时间戳
import moment from 'moment'
//在VUE脚手架中引入mint-ui
import MintUi from 'mint-ui'
//在VUE中扩展一个moment属性
Vue.prototype.moment = moment
//导入mint-ui样式表文件
import 'mint-ui/lib/style.min.css'

//通过Vu.use()把mint-ui注册为插件
Vue.use(MintUi)

axios.defaults.baseURL = 'http://127.0.0.1'
Vue.prototype.axios = axios;
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
