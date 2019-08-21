<template>
  <div>
    <div v-b-toggle.collapse-1 variant="primary" class="work-header">This Website</div>
    <b-collapse class="mt-2" id="collapse-1" style="font-size: 18px;">
      <b-card class="collapse-content">
        <p>
          I created this project the summer of 2019 as a portfolio website for employers to look at. It is created using Vue.js and bootstrap.
          The app is deployed using heroku. View the GitHub repository
          <a
            href="https://github.com/jeffting/jeff-portfolio"
            target="_blank"
          >here</a>.
        </p>
      </b-card>
    </b-collapse>
    <div
      v-b-toggle.collapse-2
      variant="primary"
      class="work-header"
    >Space Mistake: JavaScript Platformer</div>
    <b-collapse class="mt-2" id="collapse-2" style="font-size: 18px;">
      <b-card class="collapse-content">
        <p>
          In a software engineering class, a team of 4 of us created a JavaScript 2D platformer game. We decided to forego using a game engine
          and use pure JavaScript. The concept of the game is very simple; navigate the platforms past obstacles and enemies to retrieve a key.
          Then use the key to open the gate to move onto the next level. I was in charge of the physics of the game.
          which included moving, shooting, and taking damage. View the GitHub repository
          <a
            href="https://github.com/jeffting/js-platformer"
          >here</a>.
        </p>
      </b-card>
    </b-collapse>
    <div v-b-toggle.collapse-3 variant="primary" class="work-header">Ticket To Ride</div>
    <b-collapse class="mt-2" id="collapse-3" style="font-size: 18px;">
      <b-card class="collapse-content">
        <p>
          On a team of 4 we created a complete Android remake of Ticket To Ride. We used Android Studio, Java, and XML to create the application.
          We used a poller, and command pattern to allow the users to interract with the game. The game included all game rules, and a messaging
          system. We utlized the Google Maps API to display the US, and draw the rail road lines. Our team met nearly everyday to plan and discuss,
          and used GitHub to manage workflow.
        </p>
      </b-card>
    </b-collapse>
    <div v-b-toggle.collapse-4 variant="primary" class="work-header">Family Map</div>
    <b-collapse class="mt-2" id="collapse-4" style="font-size: 18px;">
      <b-card class="collapse-content">
        <p>
          This was a complete application I created for a school project. The purpose of the application was to display your ancestry on the globe.
          Using the Google Maps API, you could see lines that originate from you, connect to your parents, which then connect to their parents and so on, making a family tree. You could filter the lines
          to connect to their birthplace, deathplace, or marriage place. You could select each individual and view information about them. You also have
          the ability to add, delete, or update ancestors. The application uses Java, and XML, and includes extensive Junit testing.
        </p>
      </b-card>
    </b-collapse>
    <div style="height: 100px;"></div>
  </div>
</template>
<script>
export default {
  created() {
    this.$setPage("projects");
  }
};
</script>
<style lang="less">
@import "../assets/css/styles";
.work-header {
  &:hover {
    cursor: pointer;
  }
}
</style>