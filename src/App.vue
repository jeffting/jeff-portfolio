<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
  mounted() {}
};
</script>

<style lang="less">
@import "./assets/css/styles";

body {
  // background-color: @main-background-color !important;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  padding-left: 15%;
  padding-right: 15%;
  color: #2c3e50;
  padding-top: 90px;
  /* background-color: black; */
}
</style>
