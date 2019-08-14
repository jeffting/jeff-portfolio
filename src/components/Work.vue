<template>
  <div>
    <div v-b-toggle.collapse-1 variant="primary" class="work-header">Clearwater Analytics</div>
    <b-collapse class="mt-2" id="collapse-1" style="font-size: 18px;">
      <b-card class="collapse-content">
        <div class="d-flex justify-content-between">
          <p>Software Developer Intern</p>
          <p>May 2019 - August 2019</p>
        </div>
        <p>
          I loved my experience as an intern software developer at Clearwater Analytics. Clearwater is based in Boise, Idaho
          and provides a great learning opportunity in their internship program. I worked on a team comprised of 8 developers, and 2 mentors (they weren't allowed to do any coding).
          Over the course of the 11 week internship, we completed 2 projects from the ground up. The first being Segmentation UI, which was the focus of
          the first 2 weeks. Second, was CPD Inspector, which we worked on the remaining 9 weeks.
        </p>
        <p>
          <u>Segmentation UI</u>
        </p>
        <p style="margin-top: -15px;">
          The basis of Segmentation UI was to reduce the work done by internal employees to convert "segments", data about clients money portfolio,
          into JSON, and store it in the database. Previously, employees were entering the data into an excel spreadsheet, one by one, and constructing
          JSON using complicated excel formulas. We created Segmentation UI which automatically parses a csv into the correct JSON format, then submits it to the database utilizing
          existing apis.
          Other functionality includes searching an existing segment, and having it displayed in a clean understandable fashion, that non-programmers
          could understand. You could also delete and update existing segments.
          <br />
          <br />Specifically, I worked on hooking up the service layer to perform CRUD operations using the apis that Clearwater had already created. Also, I set up
          nginx for our project. I contributed to the UI, and set up the delete functionality among other things.
        </p>
        <p>
          <u>CPD Inspector</u>
        </p>
        <p style="margin-top: -15px;">
          This was a much bigger project. I will give some background to explain why it is needed. Often times
          clients are missing data fields on their money reports. They then call Clearwater wondering why a certain data field isn't showing up.
          This could be a problem in several different parts of the data flow pipeline. So multiple teams have to debug using loads of different
          SQL queries. Our goal was to create an application that the user can enter 2 required fields, and the app scours the database trying to
          find where the data went missing. The app then displays where in the pipeline the data went missing, making debugging
          tremendously quicker. In this process we created a front end in Angular 8, and a backend in Java, with a Tomcat server.
          <br />
          <br />I worked on the communication layer between the front and back end. Because of my previous experience in nginx, I also set up nginx,
          and helped everyone set up their nginx. Also, I learned and set up hk2 dependency injection, which was foreign territory for me. Other than
          those specific areas, I greatly contributed to the UI, backend, junit testing, jasmine front end testing, pact testing, and communication
          with internal apis.
        </p>
        <div class="d-flex justify-content-end">
          <img
            style="width: 30%; min-width: 100px;"
            src="https://media1.fdncms.com/boiseweekly/imager/u/mobilestory/4781654/clearwater_analytics.png"
          />
        </div>
      </b-card>
    </b-collapse>
    <div v-b-toggle.collapse-2 variant="primary" class="work-header">BYU Broadcasting</div>
    <b-collapse class="mt-2" id="collapse-2" style="font-size: 18px;">
      <b-card class="collapse-content">
        <div class="d-flex justify-content-between">
          <p>Vue.js Developer</p>
          <p>April 2018 - January 2019</p>
        </div>
        <p>
          The previous website was built in vanilla javascript. I was tasked with converting that website into Vue, and refactoring to be more
          efficient. My boss and I were the only ones working on the front end of the website. I was able to build 20+ components, several of them
          being reusable components. We used Atlassian products such as Jira, BitBucket, and Confluence to manage workflow. I learned a lot about good
          frontend practices, including component abstraction.
        </p>View the website I worked on at
        <a href="https://www.byutv.org" target="_blank">byutv.org</a>.
        <div class="d-flex justify-content-end">
          <img
            style="width: 15%; min-width: 75px; border-radius: 10px;"
            src="https://www.byutv.org/content/png-logos/byutv/app/square/1280x720.png"
          />
        </div>
      </b-card>
    </b-collapse>
    <div v-b-toggle.collapse-3 variant="primary" class="work-header">Elite Roofing LLC</div>
    <b-collapse class="mt-2" id="collapse-3" style="font-size: 18px;">
      <b-card class="collapse-content">
        <div class="d-flex justify-content-between">
          <p>Web Developer</p>
          <p>April 2017 - November 2017</p>
        </div>
        <p>
          This being my first programming job, I was able to learn a lot. I came in with little experience, (having only taken 3 programming classes)
          but was able to ramp up on the project quickly, and help contribute. We worked on a small team of about 5 developers. Mostly, I worked on the
          front end in Angular 8, but also spent some time working with NodeJS and MongoDB. We communicated with our boss, who had no technical experience,
          in order to create the site he envisioned.
        </p>
      </b-card>
    </b-collapse>
    <div style="height: 100px;"></div>
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