import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import {server} from './api/api'

Vue.config.productionTip = false
Vue.prototype.$server=server;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
