import { A } from '@solidjs/router';

const Header = () => {
    return (
        <header class="bg-white border-gray-200">
            <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-10 py-2">
                <A href="/optumrx-demo">
                    <img class="h-20 w-40 rounded-full" src="https://optumrx.akamaized.net/content/dam/rxmember/logos/header/logo-optumrx.svg" alt="logo" />
                </A>
                <div class="flex justify-between items-center">
                    <A href="/login" class="text-base px-4 font-bold  text-blue-600 dark:text-blue-500 hover:text-blue-800">Health Care Professionals</A>
                    <A href="https://www.optum.com/" class="text-base font-bold  text-blue-600 dark:text-blue-500 hover:text-blue-800">To optum.com</A>
                </div>
            </div>
        </header>
    );
};

export default Header;
