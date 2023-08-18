import { A } from '@solidjs/router';

const Home = () => {
    return (
        <div>
            <p class="text-7xl text-orange-700 text-center py-20">Optum-Liveperson demo!</p>
            <nav class="flex items-center justify-between flex-wrap bg-orange-500 p-6">
                <ul class="flex">
                    <li class="mr-6">
                        <A href="/secure/drug-pricing" class="text-white hover:text-orange-200">Drug Pricing</A>
                    </li>
                    <li class="mr-6">
                        <A href="/secure/medication-list" class="text-white hover:text-orange-200">Medication List</A>
                    </li>
                    <li class="mr-6">
                        <A href="/secure/order-builder" class="text-white hover:text-orange-200">Order Builder</A>
                    </li>
                    <li class="mr-6">
                        <A href="/secure/order-confirmation" class="text-white hover:text-orange-200">Order Confirmation</A>
                    </li>
                    <li class="mr-6">
                        <A href="/secure/order-status" class="text-white hover:text-orange-200">Order Status</A>
                    </li>
                    <li class="mr-6">
                        <A href="/secure/pharmacy-locator" class="text-white hover:text-orange-200">Pharmacy Locator</A>
                    </li>
                    <li class="mr-6">
                        <A href="/secure/prescription-drug-list" class="text-white hover:text-orange-200">Prescription Drug List</A>
                    </li>
                    <li class="mr-6">
                        <A href="/secure/savings-center" class="text-white hover:text-orange-200">Saving Center</A>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Home;