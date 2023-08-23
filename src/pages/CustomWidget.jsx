import { createSignal } from "solid-js";
import {
    Accordion,
    AccordionButton,
    AccordionHeader,
    AccordionItem,
    AccordionPanel,
} from 'solid-headless';
import { For } from 'solid-js';
import SDEtable from '../components/SDEtable';
import { cartSDE } from '../resources/cartSDE';
import { transactionSDE } from '../resources/transactionSDE';
import { viewedProductSDE } from '../resources/viewedProductSDE';
import { customerInfoSDE } from '../resources/customerInfoSDE';
import { marketingSourceSDE } from '../resources/marketingSourceSDE';
import { personalInfoSDE } from '../resources/personalInfoSDE';
import { leadSDE } from '../resources/leadSDE';
import { serviceActivitySDE } from '../resources/serviceActivitySDE';
import { visitorErrorSDE } from '../resources/visitorErrorSDE';
import { searchedContentSDE } from '../resources/searchedContentSDE';

function ChevronUpIcon(props) {
    return (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        {...props}
        >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 15l7-7 7 7"
            />
        </svg>
    );
};

const SDEs = [];

const sdeMapping = {
    cart: "Cart",
    purchase: "Orders",
    prodView: "Viewed Products",
    ctmrinfo: "Customer Info",
    mrktInfo: "Marketing Info",
    personal: "Personal Info",
    lead: "Leads",
    service: "Service/Subscriptions",
    error: "Errors",
    searchInfo: "Recently Searched Info",
};

const tempSDEs = [
    cartSDE,
    transactionSDE,
    viewedProductSDE,
    customerInfoSDE,
    marketingSourceSDE,
    personalInfoSDE,
    leadSDE,
    serviceActivitySDE,
    visitorErrorSDE,
    searchedContentSDE,
];

const CustomWidget = () => {
    const [lpSdes, setLpSdes] = createSignal();

    const formatSdes = (sdes) => {
        const output = [];
        for (const [key, value] of Object.entries(sdes)) {
            value.forEach((val) => {
                if (Object.keys(sdeMapping).some((k) => k === key)) { // check if key is in sdeMapping keys
                    console.log("val", val);
                    output.push(val);
                }
            });
        }
        console.log("output", output);
        return output;
    }

    const getSdes = () => {
        window.lpTag = window.lpTag || {};
        lpTag.sdes = lpTag.sdes||[];
        const sde = lpTag.sdes.get("");
        console.log("sde", sde);
        const formattedSdes = formatSdes(sde);
        setLpSdes(formattedSdes);
        // return sde;
    };

    return (
        <div class="w-full h-screen bg-violet-800">
            <div class="flex justify-center">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold m-2 py-2 px-4 rounded w-60" onclick={() => getSdes()}>Get SDEs</button>
                {/* <div>{JSON.stringify(lpSdes(), null, 2)}</div> */}
            </div>
            <div class="w-full max-w-md p-2 mx-auto bg-violet-900 rounded-2xl">
                <Accordion class="space-y-2" defaultValue={SDEs} toggleable multiple>
                <For each={lpSdes()}>
                    {(sde) => (
                    <AccordionItem value={sde}>
                        <AccordionHeader>
                        <AccordionButton
                            as="div"
                            class="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-purple-900 bg-violet-200 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                        >
                            {({ isSelected }) => (
                            <>
                                <span>{sdeMapping[sde.type]}</span>
                                <div>
                                <ChevronUpIcon
                                    class={`flex-0 ${isSelected() ? 'transform rotate-180' : ''} w-5 h-5 text-purple-500`}
                                />
                                </div>
                            </>
                            )}
                        </AccordionButton>
                        </AccordionHeader>
                        <AccordionPanel class="px-4 pt-4 pb-2 text-sm text-gray-500">
                            <SDEtable sde={sde} />
                        </AccordionPanel>
                    </AccordionItem>
                    )}
                </For>
                </Accordion>
            </div>
        </div>
    );
};

export default CustomWidget;