<template>
  <div>
    <carousel></carousel>
    <h2 class="text title-header">Thanks for visiting my page!</h2>
    <div class="text">
      My name is Jeff Tingey. I am a software developer, studying Computer Science at Brigham Young University.
      <br>Please explore my page or view my resume!
    </div>
    <button v-on:click="openPdf">Resume</button>
  </div>
</template>
<script>
import Carousel from "./Carousel";
export default {
  components: { Carousel },
  methods: {
    openPdf() {
      // console.log("here");
      window.open("../assets/nov14resume.pdf", "_blank", "fullscreen=yes");
    }
  }
};
</script>
<style lang="less">
@import "../assets/css/styles";
.title-header {
  margin-top: 50px;
}
.hooper {
  height: auto;
}
.img-fluid {
  height: 300px;
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
