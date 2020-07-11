import Vue from "vue";
import Vuex from "vuex";
import CountryItem from "@/models/CountryItem";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        countries: [
            {
                id: 0,
                name: "Afghanistan",
                flag: "https://restcountries.eu/data/afg.svg",
                inRoute: false,
            },
            {
                id: 1,
                name: "Åland Islands",
                flag: "https://restcountries.eu/data/ala.svg",
                inRoute: false,
            },
            {
                id: 2,
                name: "Albania",
                flag: "https://restcountries.eu/data/alb.svg",
                inRoute: false,
            },
        ] as CountryItem[],
        route: [] as CountryItem[],
    },
    mutations: {
        setAllCountries: (state, payload: CountryItem[]) => {
            state.countries = payload;
        },
        setRoute: (state, payload: CountryItem[]) => {
            state.route = payload;
        },
    },
    actions: {
        // AddCountryToRoute: (
        //     { commit, getters },
        //     payload: { id: number; order: number }
        // ) => {
        //     let route = getters["getRoute"];
        //     let coutries = getters["getAllCountries"];
        //     console.log(coutries[0]);
        //     console.log(route);
        // },
        SetAllCountries: ({ commit }, payload: CountryItem[]) => {
            commit("setAllCountries", payload);
        },
    },
    modules: {},
    getters: {
        getRoute: (state) => {
            return state.route;
        },
        getAllCountries: (state) => {
            return state.countries;
        },
    },
});
