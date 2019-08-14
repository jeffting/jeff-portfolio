<template>
  <div>
    <nav class="navbar nav-custom navbar-dark navbar-expand-lg fixed-top">
      <router-link class="navbar-brand name" to="/">Jeff Tingey</router-link>

      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link class="nav-item nav-link nav-button" to="/">Home</router-link>
          <router-link to="/projects" class="nav-item nav-link nav-button">Projects</router-link>
          <router-link to="/work" class="nav-item nav-link nav-button">Work</router-link>
          <router-link class="nav-item nav-link nav-button" to="/hobbies">Hobbies</router-link>
        </div>
      </div>
      <div class="darkmode-nav" style="font-size: 13px; margin-right: 5px;">Dark Mode</div>
      <label class="switch darkmode-nav">
        <input id="dark-mode-button" v-on:click="setDarkMode" type="checkbox" />
        <span class="slider round"></span>
      </label>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
        v-on:click="isSidebarOpen=true"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
    </nav>
    <sidebar
      :isDarkMode="isDarkMode"
      @setDarkMode="setDarkMode"
      @close="closeSidebar"
      v-if="isSidebarOpen"
    ></sidebar>
  </div>
</template>
<script>
import saveState from "vue-save-state";
import Sidebar from "./Sidebar";
export default {
  props: ["page"],
  data() {
    return {
      isDarkMode: false,
      isSidebarOpen: false
    };
  },
  components: {
    Sidebar
  },
  mixins: [saveState],
  mounted() {
    this.changeTheme();
  },
  methods: {
    setDarkMode() {
      this.isDarkMode = !this.isDarkMode;
      this.changeTheme();
    },
    changeTheme() {
      if (this.isDarkMode) {
        document.getElementById("dark-mode-button").checked = true;
        document.querySelector("body").classList.add("dark");
        document.querySelector("body").classList.remove("light");
      } else {
        document.querySelector("body").classList.add("light");
        document.querySelector("body").classList.remove("dark");
      }
    },
    getSaveStateConfig() {
      return {
        cacheKey: "Navbar",
        saveProperties: ["isDarkMode"]
      };
    },
    closeSidebar() {
      this.isSidebarOpen = false;
    }
  }
};
</script>
<style lang="less">
@import "../assets/css/styles";
div .navbar {
  padding: 0px;
}
.nav-custom {
  padding: 0px;
}
.name {
  padding: 10px 5px 10px 20px;
}
div .nav-link {
  padding: 15px 8px 15px 8px;
}
.switch {
  position: relative;
  display: inline-block;
  width: 30px;
  height: 17px;
  margin: auto 10px auto 0px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 13px;
  width: 13px;
  left: 2px;
  bottom: 2px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}
.navbar-toggler {
  margin: 7px 7px 7px 7px;
}
input:checked + .slider {
  background-color: #2196f3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196f3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(13px);
  -ms-transform: translateX(13px);
  transform: translateX(13px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 17px;
}

.slider.round:before {
  border-radius: 50%;
}
label {
  margin-bottom: 0px;
}

@media (max-width: 992px) {
  .nav-custom {
    .darkmode-nav {
      visibility: hidden;
      width: 0px;
    }
  }
}
</style>
