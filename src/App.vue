<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="less">
@import "./assets/colors";
body {
  background-color: @main-background-color !important;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  padding-left: 8%;
  padding-right: 10%;
  color: #2c3e50;
  padding-top: 90px;
  /* background-color: black; */
}
</style>
