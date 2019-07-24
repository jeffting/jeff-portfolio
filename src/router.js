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
    }
    // {
    //   path: "/work",
    //   name: "Work",
    //   component: Main,
    //   props: {
    //     page: "work"
    //   }
    // }
  ]
});
