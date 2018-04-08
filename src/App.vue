<template>
  <div id="app">
    <header>
      <b-navbar type="dark" variant="light" toggleable>
        <b-navbar-toggle target="nav_dropdown_collapse"></b-navbar-toggle>
        <b-collapse is-nav id="nav_dropdown_collapse">
          <b-navbar-nav>
            <b-nav-item-dropdown text="BRITECORE" left>
              <b-dropdown-item href="#">Account</b-dropdown-item>
              <b-dropdown-item href="#">Settings</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item href="#"><icon name="umbrella" label="Policies"></icon> Policies</b-nav-item>
            <b-nav-item href="#"> <icon name="bolt" label="Claims"></icon> Claims</b-nav-item>
            <b-nav-item href="#"><icon name="user" label="Contacts"></icon> Contacts</b-nav-item>
            <b-nav-item href="#"><icon name="chart-bar" label="Data"></icon> Data</b-nav-item>
            <b-nav-item href="#" active><icon name="book" label="Lines"></icon> Lines</b-nav-item>
            <b-nav-item href="#"><icon name="bullseye" label="Al Modules"></icon> All Modules</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </header>
    <b-container fluid>
      <router-view/>
    </b-container>
  </div>
</template>

<script>
import Icon from 'vue-awesome/components/Icon'

export default {
  name: 'App',
  components: { Icon }
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
