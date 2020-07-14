import { MutationTree } from "vuex";
import { RouteState } from "./types";
import RouteItem from "@/models/RouteItem";

export const mutations: MutationTree<RouteState> = {
    setRoute: (state, payload: RouteItem) => {
        if (payload.order) {
            const deletedItems = state.data.splice(
                state.data.length > 1
                    ? state.data.length + (payload.order + 1)
                    : 1,
                1,
                payload
            );
            state.data = [...state.data, ...deletedItems].map<RouteItem>(
                (e: RouteItem, i: number) => {
                    e.order = i;
                    return e;
                }
            );
        } else {
            state.data = [payload, ...state.data].map<RouteItem>(
                (e: RouteItem, i: number) => {
                    e.order = i;
                    return e;
                }
            );
        }
    },
    removeItem: (state, routeItem: RouteItem) => {
        const i = state.data.indexOf(routeItem);
        state.data.splice(i, 1);
    },
};
