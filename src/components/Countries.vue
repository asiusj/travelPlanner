<template>
  <div class="container-fluid p-0 countries text-white">
    <div class="row no-gutters text-white">
      <div class="col-12 pt-4 pl-4 pb-2 h6">{{title}}</div>
    </div>
    <div class="row no-gutters">
      <div class="col-12 pt-2 pl-4">
        <CountryListItem v-for="country in Countries" :key="country.id" :country="country" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import axios from "axios";
import CountryItem from "../models/CountryItem";
import CountryListItem from "@/components/CoutryListItem.vue";

@Component({
  components: {
    CountryListItem
  }
})
export default class Countries extends Vue {
  title = "Countries";

  get Countries(): CountryItem[] {
    return this.$store.getters["getAllCountries"];
  }

  private created() {
    // this.getAllCounries();
  }

  private getAllCounries(): void {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then(res => {
        if (res.data && res.data.type === Array) {
          const data: CountryItem[] = res.data;
          const countries: CountryItem[] = data.map(
            (country: CountryItem, i: number) => {
              const item: CountryItem = {
                id: i,
                name: country.name,
                flag: country.flag,
                inRoute: false
              };
              return item;
            }
          );
          this.$store.dispatch("SetAllCountries", countries);
        }
      })
      .catch(e => {
        console.log(e);
      });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.countries {
  background-color: $darkBlue;
}
</style>
