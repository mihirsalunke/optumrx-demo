import { Switch, Match } from "solid-js";
import CartPanel from "./CartPanel";
import OrdersPanel from "./OrdersPanel";
import ViewedProductsPanel from "./ViewedProductsPanel";
import CustomerInfoPanel from "./CustomerInfoPanel";
import MarketingInfoPanel from "./MarketingInfoPanel";
import PersonalInfoPanel from "./PersonalInfoPanel";
import LeadsPanel from "./LeadsPanel";
import ServicePanel from "./ServicePanel";
import ErrorPanel from "./ErrorPanel";
import SearchInfoPanel from "./SearchInfoPanel";

const SDEtable = ({ sde }) => {
    const type = sde.type;
    
    return (
        <Switch fallback={<div>not found...</div>}>
            <Match when={type === "cart"}>
                <CartPanel sdeData={sde} />
            </Match>
            <Match when={type === "purchase"}>
                <OrdersPanel sdeData={sde} />
            </Match>
            <Match when={type === "prodView"}>
                <ViewedProductsPanel sdeData={sde} />
            </Match>
            <Match when={type === "ctmrinfo"}>
                <CustomerInfoPanel sdeData={sde} />
            </Match>
            <Match when={type === "mrktInfo"}>
                <MarketingInfoPanel sdeData={sde} />
            </Match>
            <Match when={type === "personal"}>
                <PersonalInfoPanel sdeData={sde} />
            </Match>
            <Match when={type === "lead"}>
                <LeadsPanel sdeData={sde} />
            </Match>
            <Match when={type === "service"}>
                <ServicePanel sdeData={sde} />
            </Match>
            <Match when={type === "error"}>
                <ErrorPanel sdeData={sde} />
            </Match>
            <Match when={type === "searchInfo"}>
                <SearchInfoPanel sdeData={sde} />
            </Match>
        </Switch>
    );
};

export default SDEtable;