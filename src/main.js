import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
//事件总线
Vue.prototype.$bus = new Vue();
Vue.config.productionTip = false;

window.vm = new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
