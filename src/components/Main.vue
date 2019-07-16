<template>
  <div>
    <navbar page="hobbies"></navbar>
    <home v-if="page === 'home'"></home>
    <hobbies v-if="page === 'hobbies'"></hobbies>
    <work v-if="page === 'work'"></work>
  </div>
</template>

<script>
import Navbar from "./Navbar";
import Home from "./Home";
import Hobbies from "./Hobbies";
import Work from "./Work";

export default {
  data() {
    return {};
  },
  components: {
    Navbar,
    Home,
    Hobbies,
    Work
  },
  props: ["page"],
  created() {
    console.log(this.page);
  }
};
</script>
<style lang="less"></style>
