<template>
  <div id="app">
    <header>
      <b-navbar type="dark" variant="light" toggleable>
        <b-navbar-toggle target="nav_dropdown_collapse"></b-navbar-toggle>
        <b-collapse is-nav id="nav_dropdown_collapse">
          <b-navbar-nav>
            <b-nav-item class="active" href="#">Sample App</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </header>
    <b-container fluid>
      <container></container>
    </b-container>
  </div>
</template>

<script>
import Icon from 'vue-awesome/components/Icon'
import Container from './components/ContainerComponent/Container'
export default {
  name: 'App',
  components: {
    Icon,
    'container': Container
  }
}
</script>
<style lang="scss">
  $main-bg-color: #f8fbfb;;
  $theme-color:  #077f94;
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background: $main-bg-color;
  height: 100vh;
  max-height: 100vh;
}
h4 {
  font-size: 1.0rem;
}
.bg-light {
  background-color: $theme-color !important;
}
</style>
