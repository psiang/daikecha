import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router/router.js'  //引入路由规则

Vue.use(ElementUI)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
