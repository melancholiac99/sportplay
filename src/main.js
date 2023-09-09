import Vue from 'vue'
import ElementUI from 'element-ui';//关键引入
import'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'//渲染在index.html文件中
import './plugins/element.js'
import router from './router'
import './assets/css/global.css'//添加全局样式
//引入iconfont
import './assets/font/iconfont.css'
//导入axios实现跨域
import axios from 'axios'
//挂载axios
Vue.prototype.$http=axios
//设置访问根路径
axios.defaults.baseURL="http://localhost:9000"

Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
