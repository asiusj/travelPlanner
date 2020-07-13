import { MutationTree } from "vuex";
import { CountriesState } from "./types";
import CountryItem from "@/models/CountryItem";

export const mutations: MutationTree<CountriesState> = {
    setAllCountries: (state, payload: CountryItem[]) => {
        state.data = payload;
    },
    setCountry: (state, payload: CountryItem) => {
        state.data.splice(payload.id, 1, payload);
    },
};
