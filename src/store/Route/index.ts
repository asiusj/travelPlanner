import { Module } from "vuex";
import { getters } from "./getters";
import { actions } from "./actions";
import { mutations } from "./mutations";
import { RouteState } from "./types";
import { RootState } from "../types";

export const state: RouteState = {
    data: [
        {
            id: 0,
            name: "Afghanistan",
            flag: "https://restcountries.eu/data/afg.svg",
            inRoute: true,
            order: 0,
        },
    ],
};

const namespaced = true;

export const route: Module<RouteState, RootState> = {
    namespaced,
    state,
    getters,
    actions,
    mutations,
};
