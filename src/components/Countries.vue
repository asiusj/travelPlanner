<template>
  <div class="container-fluid p-0 countries text-white">
    <div class="row no-gutters text-white">
      <div class="col-12 pt-1 pl-1 pb-1 h6 pt-md-4 pl-md-4 pb-md-4">{{title}}</div>
    </div>
    <div class="row no-gutters">
      <div class="col-12 pt-1 pl-1 pt-md-4 pl-md-4">
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
import { State, Action } from "vuex-class";
import { CountriesState } from "../store/Countries/types";

@Component({
  components: {
    CountryListItem
  }
})
export default class Countries extends Vue {
  title = "Countries";

  @State("countries")
  countries!: CountriesState;

  get Countries(): CountryItem[] {
    return this.countries.data;
  }

  @Action("SetAllCountries", { namespace: "countries" })
  SetAllCountries!: Function;

  private created() {
    this.getAllCounries();
  }

  private getAllCounries(): void {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then(res => {
        if (res.data && res.data.length) {
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
          this.SetAllCountries(countries);
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
