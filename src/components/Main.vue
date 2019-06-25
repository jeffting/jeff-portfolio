<template>
  <div>
    <navbar page="hobbies"></navbar>
    <home v-if="page === 'home'"></home>
    <hobbies v-if="page === 'hobbies'"></hobbies>
  </div>
</template>

<script>
import Navbar from "./Navbar";
import Home from "./Home";
import Hobbies from "./Hobbies";

export default {
  data() {
    return {};
  },
  components: {
    Navbar,
    Home,
    Hobbies
  },
  props: ["page"],
  created() {
    console.log(this.page);
  }
};
</script>
<style lang="less"></style>
