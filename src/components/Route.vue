<template>
  <div class="container-fluid p-0 route route_text-color">
    <div class="row no-gutters">
      <div class="col-12 pt-1 pl-1 pb-1 h6 pt-md-4 pl-md-4 pb-md-4">{{title}}</div>
    </div>
    <div class="row no-gutters">
      <div class="col-12 pt-1 pl-1 pt-md-4 pl-md-4">
        <CountryListItem
          v-for="country in route.data"
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
import CountryListItem from "@/components/CoutryListItem.vue";
import { State } from "vuex-class";
import { RouteState } from "../store/Route/types";

@Component({
  components: {
    CountryListItem
  }
})
export default class Route extends Vue {
  title = "Route";
  @State("route")
  route!: RouteState;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.route_text-color {
  color: $lightBlue;
}
</style>
