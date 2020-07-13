import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import CountryItem from "@/models/CountryItem";
import { RootState } from "./types";
import { countries } from "./Countries";
import { route } from "./Route";

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
    modules: {
        countries,
        route,
    },
    getters: {
        getCountryById: (state) => (id: number): CountryItem => {
            return state.countries.data.filter((elem) => {
                return elem.id === id;
            })[0];
        },
    },
};

export default new Vuex.Store<RootState>(store);
