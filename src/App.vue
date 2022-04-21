<template>
  <HeaderComponent />
  <IntroductionComponent />
  <AboutMeComponent id="aboutMeComponent"/>
  <ProjectsComponent id="myAbilitiesComponent"/>
  <ContactMeComponent id="contactMeComponent"/>
  <FooterComponent />
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'
import IntroductionComponent from './components/IntroductionComponent.vue'
import AboutMeComponent from './components/AboutMeComponent.vue'
import ProjectsComponent from './components/ProjectsComponent.vue'
import ContactMeComponent from './components/ContactMeComponent.vue'
import FooterComponent from './components/FooterComponent.vue'

export default {
  components:{
    HeaderComponent,
    IntroductionComponent,
    AboutMeComponent,
    ProjectsComponent,
    ContactMeComponent,
    FooterComponent
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;500;600;700&display=swap');

* {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Josefin Sans, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $tertiarycolor;
}

/* nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
} */
</style>
