<template>
  <div>
    <div v-b-toggle.collapse-1 variant="primary" class="work-header">Clearwater Analytics</div>
    <b-collapse class="mt-2" id="collapse-1">
      <b-card class="collapse-content">
        <div class="d-flex justify-content-between">
          <p class="card-text">Software Developer Intern</p>
          <p class="card-text">May 2019 - August 2019</p>
        </div>
        <p class="card-text">
          I loved my experience as an intern software developer at Clearwater Analytics. Clearwater is based in Boise, Idaho
          and provides a great learning opportunity in their internship program. I worked on a team comprised of 8 developers, and 2 mentors (they weren't allowed to do any coding).
          Over the course of the 11 week internship, we completed 2 projects from the ground up. The first being Segmentation UI, which was the focus of
          the first 2 weeks. Second, was CPD Inspector, which we worked on the remaining 9 weeks.
        </p>
        <p>Segmentation UI</p>
        <p style="margin-top: -15px;">test</p>
        <p>CPD Inspector</p>
        <p style="margin-top: -15px;">test</p>
      </b-card>
    </b-collapse>
    <div v-b-toggle.collapse-2 variant="primary" class="work-header">BYU Broadcasting</div>
    <b-collapse class="mt-2" id="collapse-2">
      <b-card class="collapse-content">
        <div class="d-flex justify-content-between">
          <p class="card-text">Vue.js developer</p>
          <p class="card-text">April 2018 - January 2019</p>
        </div>
        <ul>
          <li
            class="card-text"
          >Played an integral role in transitioning the current web app from vanilla JavaScript into a Single Page App in Vue.js.</li>
          <li
            class="card-text"
          >Created 20+ reusable components while managing data in the store and state.</li>
          <li
            class="card-text"
          >Utilized Atlassian applications, such as BitBucket, Jira, and, Confluence to manage workflow.</li>
          <li class="card-text">
            View the website I worked on at
            <a href="https://www.byutv.org" target="_blank">byutv.org</a>
          </li>
        </ul>
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
.work-header {
  &:hover {
    cursor: pointer;
  }
}
</style>