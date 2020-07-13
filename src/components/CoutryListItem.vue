<template>
  <div class="row no-gutters country-list-item pt-2 pb-2">
    <div class="col-1 country-list-item__image">
      <img :src="country.flag" :alt="country.name" />
    </div>
    <div class="col-5 country-list-item__name ml-2">{{country.name}}</div>
    <div v-if="!route" class="col-2 text-center">
      <b-button
        pill
        variant="outline-light"
        :disabled="country.inRoute"
        @click="AddToRoute(0)"
      >start</b-button>
    </div>
    <div v-if="!route" class="col-2 text-center">
      <b-button
        pill
        variant="outline-light"
        :disabled="country.inRoute"
        @click="AddToRoute(-1)"
      >medium</b-button>
    </div>
    <div v-if="!route" class="col-2 text-center">
      <b-button pill variant="outline-light" :disabled="country.inRoute" @click="AddToRoute(1)">end</b-button>
    </div>
    <div v-if="route" class="offset-4 col-2 text-center">
      <b-button pill variant="outline-lblue">remove</b-button>
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
  @Prop() color!: string;
  @Prop() route?: boolean;

  @Action("route/AddNewRouteItem") AddNewRouteItem!: Function;

  private AddToRoute(order: number): void {
    const newRouteParams = {
      id: this.country.id,
      order
    };
    this.AddNewRouteItem(newRouteParams);
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
