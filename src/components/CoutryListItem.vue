<template>
  <div class="row no-gutters country-list-item pt-md-2 pb-md-2 pt-1 pb-1">
    <div class="col-3 col-lg-1 country-list-item__image">
      <img :src="country.flag" :alt="country.name" />
    </div>
    <div class="col-9 col-lg-5 country-list-item__name ml-2 mb-2">{{country.name}}</div>
    <div v-if="!route" class="col-md-4 col-lg-2 text-center mb-2">
      <b-button
        pill
        variant="outline-light"
        :disabled="country.inRoute"
        @click="AddToRoute(0)"
      >start</b-button>
    </div>
    <div v-if="!route" class="col-md-4 col-lg-2 text-center mb-2">
      <b-button
        pill
        variant="outline-light"
        :disabled="country.inRoute"
        @click="AddToRoute(-2)"
      >medium</b-button>
    </div>
    <div v-if="!route" class="col-md-4 col-lg-2 text-center mb-2">
      <b-button pill variant="outline-light" :disabled="country.inRoute" @click="AddToRoute(-1)">end</b-button>
    </div>
    <div v-if="route" class="offset-md-8 col-md-4 offset-lg-4 col-lg-2 text-center mb-2">
      <b-button pill variant="outline-lblue" @click="RemoveFromRoute(country.id)">remove</b-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import CountryItem from "../models/CountryItem";
import RouteItem from "../models/RouteItem";
import { Action } from "vuex-class";

@Component
export default class CoutryListItem extends Vue {
  @Prop() country!: CountryItem | RouteItem;
  @Prop() route?: boolean;

  @Action("route/AddNewRouteItem") AddNewRouteItem!: Function;

  private AddToRoute(order: number): void {
    const newRouteParams = {
      id: this.country.id,
      order
    };
    this.AddNewRouteItem(newRouteParams);
  }

  @Action("route/RemoveRouteItem") RemoveRouteItem!: Function;

  private RemoveFromRoute(id: number): void {
    this.RemoveRouteItem(id);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.country-list-item {
  .country-list-item__image {
    max-width: 24px;
    img {
      width: 24px;
    }
  }
}
</style>
