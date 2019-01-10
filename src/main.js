import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './vuex'

//引入swiper.css 很重要
import 'swiper/dist/css/swiper.min.css';
Vue.config.productionTip = false

//全局过滤器
Vue.filter('money',(val)=>{
  return '$'+val.toFixed(2)
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')