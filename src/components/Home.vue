<template>
  <div>
    <carousel></carousel>
    <h2 class="text title-header">Thanks for visiting my page!</h2>
    <div class="text body-text">
      My name is Jeff Tingey. I am a software developer, studying Computer Science at Brigham Young University.
      <br />Please explore my page, view my resume, and visit my profiles on LinkedIn and GitHub!
    </div>
    <div class="profile-flex-container d-flex justify-content-around">
      <button type="button" class="btn btn-info">View Resume</button>
      <a href="https://www.linkedin.com/in/jeff-tingey/" target="_blank">
        <img class="profile-image" src="../assets/images/linkedin.png" />
      </a>
      <a href="https://github.com/jeffting?tab=repositories" target="_blank">
        <img class="profile-image" src="../assets/images/github.png" />
      </a>
    </div>
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
.profile-flex-container {
  margin-top: 50px;
}
.body-text {
  font-size: 18px;
  line-height: 2rem;
}
.title-header {
  margin-top: 50px;
}
.hooper {
  height: auto;
}
.profile-image {
  max-height: 50px;
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
