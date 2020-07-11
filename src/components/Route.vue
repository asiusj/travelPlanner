<template>
  <div class="container-fluid p-0 route route_text-color">
    <div class="row no-gutters">
      <div class="col-12 pt-4 pl-4 pb-2 h6">{{title}}</div>
    </div>
    <div class="row no-gutters">
      <div class="col-12 pt-2 pl-4">
        <CountryListItem
          v-for="country in Countries"
          :key="country.id"
          :country="country"
          :route="true"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CountryItem from "../models/CountryItem";

@Component
export default class Route extends Vue {
  title = "Route";
  get Countries(): CountryItem[] {
    return this.$store.getters["getRoute"];
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.route_text-color {
  color: $lightBlue;
}
</style>
