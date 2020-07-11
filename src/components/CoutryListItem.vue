<template>
  <div class="row no-gutters country-list-item pt-2 pb-2">
    <div class="col-1 country-list-item__image">
      <img :src="country.flag" :alt="country.name" />
    </div>
    <div class="col-5 country-list-item__name ml-2">{{country.name}}</div>
    <div v-if="!route" class="col-2 text-center">
      <b-button pill variant="outline-light">start</b-button>
    </div>
    <div v-if="!route" class="col-2 text-center">
      <b-button pill variant="outline-light">medium</b-button>
    </div>
    <div v-if="!route" class="col-2 text-center">
      <b-button pill variant="outline-light">end</b-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import CountryItem from "../models/CountryItem";

@Component
export default class CoutryListItem extends Vue {
  @Prop() country!: CountryItem;
  @Prop() color!: string;
  @Prop() route?: boolean;
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
