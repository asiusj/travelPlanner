import CountryItem from "@/models/CountryItem";
import RouteItem from "@/models/RouteItem";

export interface RootState {
    countries: {
        data: CountryItem[];
    };
    route: {
        data: RouteItem[];
    };
}
