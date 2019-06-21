import Vue from "vue";
import Router from "vue-router";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import Main from "@/components/Main";

Vue.use(Router);
Vue.use(BootstrapVue);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Main",
      component: Main,
      props: {
        page: "home"
      }
    },
    {
      path: "/hobbies",
      name: "Main",
      component: Main,
      props: {
        page: "hobbies"
      }
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () =>
      //   import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
