<template>
  <div id="app">
    <GlobalHeader/>
    <Map/>
    <GlobalFooter/>
  </div>
</template>

<script>
import GlobalHeader from './components/GlobalHeader.vue'
import Map from './components/Map.vue'
import GlobalFooter from './components/GlobalFooter.vue'

export default {
  name: 'app',
  components: {
    GlobalHeader,
    Map,
    GlobalFooter
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
  margin-top: 60px;
}
</style>
