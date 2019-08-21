import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/css/colors.less";

Vue.config.productionTip = false;
Vue.prototype.$page = "home";
Vue.prototype.$setPage = function (pageName) {
  Vue.prototype.$page = pageName;
};
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");