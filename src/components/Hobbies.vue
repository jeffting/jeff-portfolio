<template>
  <div>
    <!-- <div class="player-div">
      <h2>Number of W's your getting</h2>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/v=iDCegwpnlbM"
        frameborder="0"
        allow="encrypted-media"
        allowfullscreen
      ></iframe>
    </div>-->
    <div class="player-div">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/8uLGRoMGQJg"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
    <!-- <youtube :video-id="'https://www.youtube.com/embed/8uLGRoMGQJg'"></youtube> -->
  </div>
</template>
<script>
export default {
  components: {}
};
</script>
<style lang="less">
.player-div {
  text-align: center;
  margin-top: 30px;
  margin: auto;
}

@media (max-width: 1000px) {
  iframe {
    width: 400px;
    height: 225px;
  }
}
@media (max-width: 750px) {
  iframe {
    width: 300px;
    height: 169px;
  }
}
</style>