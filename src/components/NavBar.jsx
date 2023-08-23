import { A } from '@solidjs/router';

const NavBar = () => {
    return (
        <nav class="flex items-center justify-between flex-wrap bg-gray-600 p-6">
            <ul class="flex">
                <li class="mr-6">
                    <A href="/secure/drug-pricing" class="text-white hover:text-blue-300">Drug Pricing</A>
                </li>
                <li class="mr-6">
                    <A href="/secure/medication-list" class="text-white hover:text-blue-300">Medication List</A>
                </li>
                <li class="mr-6">
                    <A href="/secure/order-builder" class="text-white hover:text-blue-300">Order Builder</A>
                </li>
                <li class="mr-6">
                    <A href="/secure/order-confirmation" class="text-white hover:text-blue-300">Order Confirmation</A>
                </li>
                <li class="mr-6">
                    <A href="/secure/order-status" class="text-white hover:text-blue-300">Order Status</A>
                </li>
                <li class="mr-6">
                    <A href="/secure/pharmacy-locator" class="text-white hover:text-blue-300">Pharmacy Locator</A>
                </li>
                <li class="mr-6">
                    <A href="/secure/prescription-drug-list" class="text-white hover:text-blue-300">Prescription Drug List</A>
                </li>
                <li class="mr-6">
                    <A href="/secure/savings-center" class="text-white hover:text-blue-300">Saving Center</A>
                </li>
                <li class="mr-6">
                    <A href="/optumrx-demo/custom-widget" class="text-white hover:text-blue-300">Custom Widget Demo</A>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;