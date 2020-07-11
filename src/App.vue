<template>
  <div id="app">
    <Planner />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Planner from "./components/Planner.vue";

@Component({
  components: {
    Planner
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import "~@/scss/variables.scss";

// Import Bootstrap and BootstrapVue source SCSS files
@import "~bootstrap/scss/bootstrap.scss";
@import "~bootstrap-vue/src/index.scss";
</style>
