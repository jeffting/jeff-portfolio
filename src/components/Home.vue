<template>
  <div>
    <img src="../assets/jeff.png" class="img-fluid" alt="picture of jeff">
    <div class="text-div text">Thank you for visiting my page</div>
  </div>
</template>
<script></script>
<style lang="less">
@import "../assets/css/styles";

.img-fluid {
  height: 300px;
  float: left;
}
.text-div {
  font-size: 50px;
}
@media (max-width: 1000px) {
  .img-fluid {
    height: 200px;
  }
}
@media (max-width: 750px) {
  .img-fluid {
    height: 150px;
  }
}
</style>
