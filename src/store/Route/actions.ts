import { ActionTree } from "vuex";
import { RouteState } from "./types";
import { RootState } from "../types";
import CountryItem from "@/models/CountryItem";
import RouteItem from "@/models/RouteItem";

export const actions: ActionTree<RouteState, RootState> = {
    AddNewRouteItem: (
        { commit, rootGetters },
        payload: { id: number; order: number }
    ) => {
        const country: CountryItem = rootGetters.getCountryById(payload.id);

        commit("setRoute", { ...country, order: payload.order });
        commit(
            "countries/setCountry",
            { ...country, inRoute: true },
            { root: true }
        );
    },
    RemoveRouteItem: ({ commit, rootGetters }, id: number) => {
        const routeItem: RouteItem = rootGetters.getRouteItemById(id);
        const country: CountryItem = rootGetters.getCountryById(id);

        commit("removeItem", routeItem);
        commit(
            "countries/setCountry",
            { ...country, inRoute: false },
            { root: true }
        );
    },
};
