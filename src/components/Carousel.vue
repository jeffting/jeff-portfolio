<template>
  <hooper :progress="true" :autoPlay="true" :playSpeed="5000" :infiniteScroll="true">
    <slide>
      <div class="image-container">
        <img src="../assets/images/jeff.png" alt="picture of jeff" />
      </div>
    </slide>
    <slide>
      <div class="image-container">
        <img src="../assets/images/cw.jpg" alt="picture of jeff" />
      </div>
    </slide>
    <slide>
      <div class="image-container">
        <img src="../assets/images/byu.jpg" alt="picture of jeff" />
      </div>
    </slide>
    <slide>
      <div class="image-container">
        <img src="../assets/images/sbmethod.jpg" alt="picture of jeff" />
      </div>
    </slide>
    <slide>
      <div class="image-container">
        <img src="../assets/images/jm.jpg" alt="picture of jeff" />
      </div>
    </slide>
    <slide>
      <div class="image-container">
        <img src="../assets/images/wb.jpg" alt="picture of jeff" />
      </div>
    </slide>
    <slide>
      <div class="image-container">
        <img src="../assets/images/sb.jpg" alt="picture of jeff" />
      </div>
    </slide>
    <hooper-pagination slot="hooper-addons"></hooper-pagination>
  </hooper>
</template>
<script>
import { Hooper, Slide, Pagination as HooperPagination } from "hooper";
import "hooper/dist/hooper.css";
export default {
  components: { Hooper, Slide, HooperPagination }
};
</script>
<style scoped lang="less">
.image-container {
  display: flex;
  justify-content: center;
}
img {
  height: 300px;
  width: auto;
  border-radius: 5px;
}
@media (max-width: 750px) {
  img {
    height: 200px;
  }
}
</style>