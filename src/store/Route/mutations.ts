import { MutationTree } from "vuex";
import { RouteState } from "./types";
import RouteItem from "@/models/RouteItem";

export const mutations: MutationTree<RouteState> = {
    setRoute: (state, payload: RouteItem) => {
        state.data = [...state.data, payload];
        // if (payload.order == state.data.length) {
        // }
    },
};
