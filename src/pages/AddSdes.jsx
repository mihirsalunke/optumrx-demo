import { createSignal } from "solid-js";
import { cartSDE as defaultCartSDE } from '../resources/cartSDE';
import { transactionSDE as defaultTransactionSDE } from '../resources/transactionSDE';
import { viewedProductSDE as defaultViewedProductSDE } from '../resources/viewedProductSDE';
import { customerInfoSDE as defaultCustomerInfoSDE } from '../resources/customerInfoSDE';
import { marketingSourceSDE as defaultMarketingSourceSDE } from '../resources/marketingSourceSDE';
import { personalInfoSDE as defaultPersonalInfoSDE } from '../resources/personalInfoSDE';
import { leadSDE as defaultLeadSDE } from '../resources/leadSDE';
import { serviceActivitySDE as defaultServiceActivitySDE } from '../resources/serviceActivitySDE';
import { visitorErrorSDE as defaultVisitorErrorSDE } from '../resources/visitorErrorSDE';
import { searchedContentSDE as defaultSearchedContentSDE } from '../resources/searchedContentSDE';

const AddSdes = () => {
    const [cartSDE, setCartSDE] = createSignal("");
    const [purchaseSDE, setPurchaseSDE] = createSignal("");
    const [viewedProductsSDE, setViewedProductsSDE] = createSignal("");
    const [customerInfoSDE, setCustomerInfoSDE] = createSignal("");
    const [marketingInfoSDE, setMarketingInfoSDE] = createSignal("");
    const [personalInfoSDE, setPersonalInfoSDE] = createSignal("");
    const [leadInfoSDE, setLeadInfoSDE] = createSignal("");
    const [serviceSDE, setServiceSDE] = createSignal("");
    const [errorSDE, setErrorSDE] = createSignal("");
    const [searchInfoSDE, setSearchInfoSDE] = createSignal("");
    const [sde, setSde] = createSignal();

    const addSDE = (sde) => {
        // const sdeObj = JSON.parse(sde);
        // console.log("sde", sdeObj);
        // setSde(sdeObj);
        setSde(sde);
        window.lpTag = window.lpTag || {};
        lpTag.sdes = lpTag.sdes||[];
        lpTag.sdes.push(JSON.parse(sde));
    }

    return (
        <>
        <div>{sde()}</div>
        <div class="grid grid-cols-2 gap-2">
            <div class="flex flex-col items-center">
                <textarea class="border-2 border-gray-300 p-2 m-2 w-96 h-36" placeholder="Cart SDE" value={cartSDE()} oninput={e => setCartSDE(e.target.value)}></textarea>
                <div>
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold m-2 py-2 px-4 rounded w-60" onclick={() => addSDE(cartSDE())}>Add Cart SDE</button>
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold m-2 py-2 px-4 rounded w-32" onclick={() => setCartSDE(JSON.stringify(defaultCartSDE, null, 2))}>Add Default</button>
                </div>
            </div>
            <div class="flex flex-col items-center">
                <textarea class="border-2 border-gray-300 p-2 m-2 w-96 h-36" placeholder="Purchase SDE" value={purchaseSDE()} oninput={e => setPurchaseSDE(e.target.value)}></textarea>
                <div>
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold m-2 py-2 px-4 rounded w-60" onclick={() => addSDE(purchaseSDE())}>Add Purchase SDE</button>
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold m-2 py-2 px-4 rounded w-32" onclick={() => setPurchaseSDE(JSON.stringify(defaultTransactionSDE, null, 2))}>Add Default</button>
                </div>
            </div>
            <div class="flex flex-col items-center">
                <textarea class="border-2 border-gray-300 p-2 m-2 w-96 h-36" placeholder="Viewed Products SDE" value={viewedProductsSDE()} oninput={e => setViewedProductsSDE(e.target.value)}></textarea>
                <div>
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold m-2 py-2 px-4 rounded w-60" onclick={() => addSDE(viewedProductsSDE())}>Add Viewed Products SDE</button>
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold m-2 py-2 px-4 rounded w-32" onclick={() => setViewedProductsSDE(JSON.stringify(defaultViewedProductSDE, null, 2))}>Add Default</button>
                </div>
            </div>
            <div class="flex flex-col items-center">
                <textarea class="border-2 border-gray-300 p-2 m-2 w-96 h-36" placeholder="Customer Info SDE" value={customerInfoSDE()} oninput={e => setCustomerInfoSDE(e.target.value)}></textarea>
                <div>
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold m-2 py-2 px-4 rounded w-60" onclick={() => addSDE(customerInfoSDE())}>Add Customer Info SDE</button>
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold m-2 py-2 px-4 rounded w-32" onclick={() => setCustomerInfoSDE(JSON.stringify(defaultCustomerInfoSDE, null, 2))}>Add Default</button>
                </div>
            </div>
            <div class="flex flex-col items-center">
                <textarea class="border-2 border-gray-300 p-2 m-2 w-96 h-36" placeholder="Marketing Info SDE" value={marketingInfoSDE()} oninput={e => setMarketingInfoSDE(e.target.value)}></textarea>
                <div>
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold m-2 py-2 px-4 rounded w-60" onclick={() => addSDE(marketingInfoSDE())}>Add Marketing Info SDE</button>
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold m-2 py-2 px-4 rounded w-32" onclick={() => setMarketingInfoSDE(JSON.stringify(defaultMarketingSourceSDE, null, 2))}>Add Default</button>
                </div>
            </div>
            <div class="flex flex-col items-center">
                <textarea class="border-2 border-gray-300 p-2 m-2 w-96 h-36" placeholder="Personal Info SDE" value={personalInfoSDE()} oninput={e => setPersonalInfoSDE(e.target.value)}></textarea>
                <div>
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold m-2 py-2 px-4 rounded w-60" onclick={() => addSDE(personalInfoSDE())}>Add Personal Info SDE</button>
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold m-2 py-2 px-4 rounded w-32" onclick={() => setPersonalInfoSDE(JSON.stringify(defaultPersonalInfoSDE, null, 2))}>Add Default</button>
                </div>
            </div>
            <div class="flex flex-col items-center">
                <textarea class="border-2 border-gray-300 p-2 m-2 w-96 h-36" placeholder="Lead Info SDE" value={leadInfoSDE()} oninput={e => setLeadInfoSDE(e.target.value)}></textarea>
                <div>
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold m-2 py-2 px-4 rounded w-60" onclick={() => addSDE(leadInfoSDE())}>Add Lead Info SDE</button>
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold m-2 py-2 px-4 rounded w-32" onclick={() => setLeadInfoSDE(JSON.stringify(defaultLeadSDE, null, 2))}>Add Default</button>
                </div>
            </div>
            <div class="flex flex-col items-center">
                <textarea class="border-2 border-gray-300 p-2 m-2 w-96 h-36" placeholder="Service SDE" value={serviceSDE()} oninput={e => setServiceSDE(e.target.value)}></textarea>
                <div>
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold m-2 py-2 px-4 rounded w-60" onclick={() => addSDE(serviceSDE())}>Add Service SDE</button>
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold m-2 py-2 px-4 rounded w-32" onclick={() => setServiceSDE(JSON.stringify(defaultServiceActivitySDE, null, 2))}>Add Default</button>
                </div>
            </div>
            <div class="flex flex-col items-center">
                <textarea class="border-2 border-gray-300 p-2 m-2 w-96 h-36" placeholder="Error SDE" value={errorSDE()} oninput={e => setErrorSDE(e.target.value)}></textarea>
                <div>
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold m-2 py-2 px-4 rounded w-60" onclick={() => addSDE(errorSDE())}>Add Error SDE</button>
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold m-2 py-2 px-4 rounded w-32" onclick={() => setErrorSDE(JSON.stringify(defaultVisitorErrorSDE, null, 2))}>Add Default</button>
                </div>
            </div>
            <div class="flex flex-col items-center">
                <textarea class="border-2 border-gray-300 p-2 m-2 w-96 h-36" placeholder="Search Info SDE" value={searchInfoSDE()} oninput={e => setSearchInfoSDE(e.target.value)}></textarea>
                <div>
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold m-2 py-2 px-4 rounded w-60" onclick={() => addSDE(searchInfoSDE())}>Add Search Info SDE</button>
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold m-2 py-2 px-4 rounded w-32" onclick={() => setSearchInfoSDE(JSON.stringify(defaultSearchedContentSDE, null, 2))}>Add Default</button>
                </div>
            </div>
        </div>
        </>
    );
};

export default AddSdes;