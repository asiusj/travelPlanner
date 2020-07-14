import { Module } from "vuex";
import { getters } from "./getters";
import { actions } from "./actions";
import { mutations } from "./mutations";
import { CountriesState } from "./types";
import { RootState } from "../types";

export const state: CountriesState = {
    data: [
        // {
        //     id: 0,
        //     name: "Afghanistan",
        //     flag: "https://restcountries.eu/data/afg.svg",
        //     inRoute: false,
        // },
        // {
        //     id: 1,
        //     name: "Åland Islands",
        //     flag: "https://restcountries.eu/data/ala.svg",
        //     inRoute: false,
        // },
        // {
        //     id: 2,
        //     name: "Albania",
        //     flag: "https://restcountries.eu/data/alb.svg",
        //     inRoute: false,
        // },
    ],
};

const namespaced = true;

export const countries: Module<CountriesState, RootState> = {
    namespaced,
    state,
    getters,
    actions,
    mutations,
};
