import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import {Button} from 'element-ui'
Vue.config.productionTip = false
Vue.use(Button)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
