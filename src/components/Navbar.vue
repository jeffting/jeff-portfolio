<template>
  <div>
    <nav class="navbar nav-custom navbar-dark navbar-expand-lg fixed-top">
      <a class="navbar-brand name" href="#">Jeff Tingey</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link class="nav-item nav-link nav-button" :click="changePage('home')" to="/">Home</router-link>
          <a class="nav-item nav-link nav-button" href="#">Work</a>
          <a class="nav-item nav-link nav-button" href="#">Projects</a>
          <router-link
            class="nav-item nav-link nav-button"
            :class="{active: isHobbyPage}"
            to="/hobbies"
          >Hobbies</router-link>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  props: ["page"],
  computed: {
    isHobbyPage() {
      return this.page === "hobbies";
    }
  },
  methods: {
    changePage(page) {
      this.page = page;
    }
  }
};
</script>
<style lang="less">
@import "../assets/colors";
.nav-custom {
  background-color: @navbar-background;
  color: @main-text;
  padding: 0px;
}
.name {
  padding: 10px 5px 10px 20px;
}
.nav-button {
  padding: 15px 0px 15px 0px;
  &:hover {
    background-color: @navbar-hover-color;
  }
}
</style>