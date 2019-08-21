<template>
  <div>
    <div class="sidebar">
      <div v-on:click="closeSidebar()" class="close-icon">X</div>
      <div class="sidebar-list">
        <router-link
          v-on:click.native="closeSidebar()"
          :class="{ selected: this.pageName === 'home', 'nav-button': this.pageName !== 'home'}"
          class="nav-item text nav-link sidebar-item top-sidebar-item"
          to="/"
        >Home</router-link>
        <router-link
          v-on:click.native="closeSidebar()"
          to="/projects"
          :class="{ selected: this.pageName === 'projects', 'nav-button': this.pageName !== 'projects'}"
          class="nav-item text nav-link sidebar-item"
        >Projects</router-link>
        <router-link
          v-on:click.native="closeSidebar()"
          to="/work"
          :class="{ selected: this.pageName === 'work', 'nav-button': this.pageName !== 'work'}"
          class="nav-item nav-link text sidebar-item"
        >Work</router-link>
        <router-link
          v-on:click.native="closeSidebar()"
          to="/hobbies"
          :class="{ selected: this.pageName === 'hobbies', 'nav-button': this.pageName !== 'hobbies'}"
          class="nav-item nav-link text sidebar-item"
        >Hobbies</router-link>
        <div class="d-flex justify-content-center darkmode-div">
          <div class="darkmode-nav text" style="font-size: 13px; margin-right: 5px;">Dark Mode</div>
          <label class="switch darkmode-nav">
            <input id="dark-mode-side-button" v-on:click="setDarkMode" type="checkbox" />
            <span class="slider round"></span>
          </label>
        </div>
      </div>
    </div>
    <div v-on:click="closeSidebar()" class="sidebar-background"></div>
  </div>
</template>
<script>
export default {
  props: ["isDarkMode"],
  data() {
    return {
      pageName: null
    };
  },
  mounted() {
    if (this.isDarkMode) {
      document.getElementById("dark-mode-side-button").checked = true;
    }
    this.pageName = this.$page;
  },
  methods: {
    closeSidebar() {
      this.$emit("close");
      this.pageName = this.$page;
      this.$emit("setPageName");
    },
    setDarkMode() {
      this.$emit("setDarkMode");
    }
  }
};
</script>
<style lang="less">
@import "../assets/css/styles";
/* Safari 4.0 - 8.0 */
@-webkit-keyframes mymove {
  from {
    right: 0px;
  }
  to {
    right: 200px;
  }
}

/* Standard syntax */
@keyframes mymove {
  from {
    right: -350px;
  }
  to {
    right: 0px;
  }
}
.sidebar {
  position: fixed;
  width: 50%;
  max-width: 400px;
  min-width: 250px;
  background-color: white;
  height: 120%;
  right: 0;
  top: 0;
  z-index: 1032;
  -webkit-box-shadow: 0px 0px 22px -4px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 22px -4px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 22px -4px rgba(0, 0, 0, 0.75);
  -webkit-animation: mymove 0.5s; /* Safari 4.0 - 8.0 */
  animation: mymove 0.5s;
  .sidebar-item {
    font-size: 20px;
    border-bottom: solid;
    border-width: 1px;
  }
  .top-sidebar-item {
    border-top: solid;
    border-width: 1px;
  }
}
.close-icon {
  margin: 12px 0 12px 30px;
  padding-top: 3px;
  padding-left: 3px;
  padding-right: 3px;
  padding-bottom: 3px;
  font-size: 22px;
  display: inline-block;
}
.sidebar-background {
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
  height: 120%;
  background-color: #000;
  opacity: 0.7;
  z-index: 1031;
}

.sidebar-list {
  text-align: center;
  li {
    list-style: none;
  }
}
.darkmode-div {
  margin-top: 20px;
}
</style>