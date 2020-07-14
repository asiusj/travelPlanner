<template>
  <div class="container planner">
    <div class="row">
      <div class="col-12 text-center text-white h4 p-4 planner__title m-0">{{name}}</div>
    </div>
    <div class="row">
      <div class="col-6 p-0">
        <Route />
      </div>
      <div class="col-6 p-0">
        <Countries />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Route from "@/components/Route.vue";
import Countries from "@/components/Countries.vue";

@Component({
  components: {
    Route,
    Countries
  }
})
export default class Planner extends Vue {
  name = "Travel Planner";
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.planner {
  box-shadow: 0px 0px 16px rgba(120, 120, 120, 0.7);
  .planner__title {
    background-color: #6b95e1;
  }
}
</style>
