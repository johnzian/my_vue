import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import {server} from './api/api'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: state.lang,
  messages: {
    en: require('./lang/en'),
    ar: require('./lang/ar')
  }
})

Vue.config.productionTip = false
Vue.prototype.$server=server;
new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
