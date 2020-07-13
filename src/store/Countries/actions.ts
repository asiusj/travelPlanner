import { ActionTree } from "vuex";
import { CountriesState } from "./types";
import { RootState } from "../types";
import CountryItem from "@/models/CountryItem";

export const actions: ActionTree<CountriesState, RootState> = {
    SetAllCountries: ({ commit }, payload: CountryItem[]) => {
        commit("setAllCountries", payload);
    },
};
