<template>
  <div>
    <div v-b-toggle.collapse-1 variant="primary" class="work-header">Clearwater Analytics</div>
    <b-collapse class="mt-2" id="collapse-1">
      <b-card class="collapse-content">
        <p class="card-text">Collapse contents Here</p>
      </b-card>
    </b-collapse>
    <div v-b-toggle.collapse-2 variant="primary" class="work-header">BYU Broadcasting</div>
    <b-collapse class="mt-2" id="collapse-2">
      <b-card class="collapse-content">
        <p class="card-text">Collapse contents Here</p>
      </b-card>
    </b-collapse>
    <div v-b-toggle.collapse-3 variant="primary" class="work-header">Elite Roofing LLC</div>
    <b-collapse class="mt-2" id="collapse-3">
      <b-card class="collapse-content">
        <p class="card-text">Collapse contents Here</p>
      </b-card>
    </b-collapse>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less">
@import "../assets/css/styles";
</style>