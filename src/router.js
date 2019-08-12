import Vue from "vue";
import Router from "vue-router";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import Home from "@/components/Home";
import Hobbies from "@/components/Hobbies";
import Work from "@/components/Work";
import Projects from "@/components/Projects";

Vue.use(Router);
Vue.use(BootstrapVue);

export default new Router({
  routes: [{
      path: "/",
      name: "Home",
      component: Home,
      props: {
        page: "home"
      }
    },
    {
      path: "/hobbies",
      name: "Hobbies",
      component: Hobbies,
      props: {
        page: "hobbies"
      }
    },
    {
      path: "/work",
      name: "Work",
      component: Work,
      props: {
        page: "work"
      }
    },
    {
      path: "/projects",
      name: "Projects",
      component: Projects,
      props: {
        page: "projects"
      }
    }
  ]
});