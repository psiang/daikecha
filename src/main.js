import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router/router.js'  //引入路由规则
import vuescroll from 'vuescroll';
import VueResource from 'vue-resource'
import axios from 'axios';


Vue.prototype.$axios = axios;

Vue.use(VueResource);
Vue.use(ElementUI);
Vue.use(vuescroll);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
