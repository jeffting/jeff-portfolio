<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  mounted() {}
};
</script>

<style lang="less">
@import "./assets/css/styles";

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding-left: 15%;
  padding-right: 15%;
  padding-top: 90px;
}
</style>
