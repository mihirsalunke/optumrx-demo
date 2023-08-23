import {
    Accordion,
    AccordionButton,
    AccordionHeader,
    AccordionItem,
    AccordionPanel,
} from 'solid-headless';
import { For } from 'solid-js';
import SDEtable from '../components/SDEtable';

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
    {
        type: "cart",
        total: 25.2, //TOTAL CART VALUE
        currency: "USD", //CURRENCY CODE
        numItems: 3, //NUMBER OF ITEMS IN CART
        products: [{ //ARRAY OF PRODUCTS
            product: {
            name: "prod1", //PRODUCT NAME
            category: "category1", //PRODUCT CATEGORY NAME
            sku: "sku1", //PRODUCT SKU OR UNIQUE IDENTIFIER
            price: 7.8 //PRODUCT PRICE
            }, quantity: 1 //NUMBER OF PRODUCTS
        },
        { //ARRAY OF PRODUCTS
            product: {
            name: "prod2", //PRODUCT NAME
            category: "categor2", //PRODUCT CATEGORY NAME
            sku: "sku2", //PRODUCT SKU OR UNIQUE IDENTIFIER
            price: 8.7 //PRODUCT PRICE
            }, quantity: 2 //NUMBER OF PRODUCTS
        }],
    },
    {
        type: "purchase",
        total: 11.7, //TOTAL VALUE OF THE TRANSACTION AFTER DISCOUNT
        currency: "USD", //CURRENCY CODE
        orderId: "DRV1534XC", //UNIQUE ORDER ID OR RECEIPT ID
        cart: {
            products: [{
                    product: {
                    name: "antivirus pro plan", //PRODUCT NAME
                    category: "software", //PRODUCT CATEGORY NAME
                    sku: "xyz001", //PRODUCT SKU OR UNIQUE IDENTIFIER
                    price: 7.8 //SINGLE PRODUCT PRICE
                },
                quantity: 3 //QUANTITY OF THIS PRODUCT
            },
            {
                product: {
                name: "dental premium plan", //PRODUCT NAME
                category: "health", //PRODUCT CATEGORY NAME
                sku: "abc001", //PRODUCT SKU OR UNIQUE IDENTIFIER
                price: 250.7 //SINGLE PRODUCT PRICE
            },
            quantity: 1 //QUANTITY OF THIS PRODUCT
            }],
        }
    },
    {
        type: "prodView",
        currency: "USD", //CURRENCY CODE
        products: [{ //ARRAY OF PRODUCTS
            product: {
                name: "red high heel shoe", //PRODUCT NAME
                category: "women shoes", //PRODUCT CATEGORY NAME
                sku: "xyz567", //PRODUCT SKU OR UNIQUE IDENTIFIER
                price: 77.8, //SINGLE PRODUCT PRICE
                statusInStock: "high",  //PRODUCT STATUS IN STOCK
                quantityInStock: 700  //AVAILABLE QUANTITY IN STOCK
            }
        },
        { //ARRAY OF PRODUCTS
            product: {
                name: "nike air jordan 1", //PRODUCT NAME
                category: "men shoes", //PRODUCT CATEGORY NAME
                sku: "abc567", //PRODUCT SKU OR UNIQUE IDENTIFIER
                price: 170.99, //SINGLE PRODUCT PRICE
                statusInStock: "low",  //PRODUCT STATUS IN STOCK
                quantityInStock: 2  //AVAILABLE QUANTITY IN STOCK
            }
        }],
    },
    {
        type: "ctmrinfo",
        info: {
            cstatus: "cancelled", //CUSTOMER LIFECYCLE STATUS. FROM PRE-DEFINED LIST
            ctype: "vip", //CUSTOMER TYPE OR TIER. FROM PRE-DEFINED LIST
            customerId: "138766AC", //UNIQUE CUSTOMER IDENTIFIER
            balance: -400.99, //THE CUSTOMER FINANCIAL BALANCE IN DECIMAL VALUE
            currency: "USD", //CURRENCY CODE
            socialId: "11256324780", //SOCIAL ID OF YOUR CHOICE: FACEBOOK, TWITTER
            imei: "3543546543545688", //UNIQUE DEVICE OR PHONE IDENTIFIER
            userName: "user000", //CONSUMER NICKNAME OR USERNAME
            companySize: 500, //COMPANY SIZE MEASURED BY NUMBER OF EMPLOYEES
            companyBranch: "East Village", //THE CUSTOMER'S COMPANY BRANCH NAME
            accountName: "bank corp", //THE CUSTOMER'S COMPANY NAME
            role: "broker", //CONSUMER ROLE TITLE
            lastPaymentDate: {
              day: 15, //THE DAY OF THE LAST PAYMENT NUMERIC VALUE
              month: 10, //THE MONTH OF THE LAST PAYMENT NUMERIC VALUE
              year: 2014 //THE YEAR OF THE LAST PAYMENT NUMERIC VALUE
            },
            registrationDate: {
              day: 23, //THE DAY OF THE REGISTRATION NUMERIC VALUE
              month: 5, //THE MONTH OF THE REGISTRATION NUMERIC VALUE
              year: 2013 //THE YEAR OF THE REGISTRATION NUMERIC VALUE
            },
            storeNumber: "123865", //STORE NUMBER
            storeZipCode: "20505" //STORE ZIP CODE
        },
    },
    {
        type: "mrktInfo",
        info: {
            channel: "1", //ORIGINATING CHANNEL ENUM:
            affiliate: "Yahoo", //AFFILIATE NAME
            campaignId: "US coupon campaign" //EXTERNAL ORIGINATING CAMPAIGN
        },
    },
    {
        type: "personal",
        personal: {
            firstname: "John", // FIRST NAME
            lastname: "Doe", // SURNAME
            age: {
                age: 34, // AGE AS INTEGER
                year: 1980, // BIRTH YEAR
                month: 4, // BIRTH MONTH
                day: 15 // BIRTH DAY
            },
            contacts: [{
                email: "myname@example.com", // EMAIL
                phone: "+1 212-788-8877", // PHONE NUMBER
                address: {
                    country: "Russia", // COUNTRY
                    region: "Moscow" // REGION
                }
            }],
            gender: "MALE", // MALE, FEMALE, OTHER
            language: "en-US", // LANGUAGE
            company: "company" // VISITOR COMPANY NAME
        },
    },
    {
        type: "lead",
        lead: {
            topic: "luxury car test drive 2015", //TOPIC OR NAME OF A SUBMITTED LEAD
            value: 22.22, //EVALUATED VALUE OF THE LEAD
            currency: "USD", //CURRENCY CODE
            leadId: "xyz123" //LEAD IDENTIFIER OR TICKET ID
        },
    },
    {
        type: "service",
        service: {
            topic: "order checkbook", // SERVICE ACTIVITY TOPIC OR NAME
            status: 0, // STATUS ENUM
            category: "finance", // SERVICE CATEGORY NAME
            serviceId: "service12" // SERVICE UNIQUE IDENTIFIER OR TICKET ID
        },
    },
    {
        type: "error",
        error: {
            contextId: "Credit card application",
            message: "Expiration date missing", // ERROR MESSAGE
            code: "er100004", // ERROR CODE
            level: 10,
            resolved: false
        },
    },
    {
        type: "searchInfo",
        keywords: ["Reset password", "Order status"], //TERMS SEARCHED BY A VISITOR. FOR EXAMPLE: FAQ ABOUT RESET PASSWORD
    },
];

// const formatSDEs = (sde) => {
//     let formattedSDE = {};
//     if (sde.type === "cart") {
//         formattedSDE = {
//             type: sde.type,
//             "Cart total": sde.total,
//             "Currency": sde.currency,
//             "Number of items": sde.numItems,
//             "Products": sde.products.map((product) => {
//                 return {
//                     "Product name": product.product.name,
//                     "Product category": product.product.category,
//                     "Product SKU": product.product.sku,
//                     "Product price": product.product.price,
//                     "Total quantity": product.quantity
//                 };
//             })
//         };
//     } else if (sde.type === "purchase") {
//         formattedSDE = {
//             type: sde.type,
//             "Order total": sde.total,
//             "Currency": sde.currency,
//             "Order Id": sde.orderId,
//             cart: {
//                 products: sde.cart.products.map((product) => {
//                     return {
//                         "Product name": product.product.name,
//                         "Product category": product.product.category,
//                         "Product SKU": product.product.sku,
//                         "Product price": product.product.price,
//                         "Total quantity": product.quantity
//                     };
//                 })
//             },
//         };
//     } else if (sde.type === "prodView") {
//         formattedSDE = {
//             // type: sdeMapping[sde.type],
//             "Currency": sde.currency,
//             "Products": sde.products.map((product) => {
//                 return {
//                     "Product name": product.product.name,
//                     "Product category": product.product.category,
//                     "Product SKU": product.product.sku,
//                     "Product price": product.product.price,
//                     "Product status in stock": product.product.statusInStock,
//                     "Product quantity in stock": product.product.quantityInStock
//                 };
//             })
//         };
//     } else if (sde.type === "ctmrinfo") {
//         formattedSDE = {
//             // type: sdeMapping[sde.type],
//             "Customer status": sde.info.cstatus,
//             "Customer type": sde.info.ctype,
//             "Customer Id": sde.info.customerId,
//             "Customer balance": sde.info.balance,
//             "Currency": sde.info.currency,
//             "Social Id": sde.info.socialId,
//             "IMEI": sde.info.imei,
//             "User name": sde.info.userName,
//             "Company size": sde.info.companySize,
//             "Company branch": sde.info.companyBranch,
//             "Account name": sde.info.accountName,
//             "Role": sde.info.role,
//             "Last payment date": `${sde.info.lastPaymentDate.month}/${sde.info.lastPaymentDate.day}/${sde.info.lastPaymentDate.year}`,
//             "Registration date": `${sde.info.registrationDate.month}/${sde.info.registrationDate.day}/${sde.info.registrationDate.year}`,
//             "Store number": sde.info.storeNumber,
//             "Store zip code": sde.info.storeZipCode,
//         };
//     } else if (sde.type === "mrktInfo") {
//         formattedSDE = {
//             // type: sdeMapping[sde.type],
//             "Channel": sde.info.channel,
//             "Affiliate": sde.info.affiliate,
//             "Campaign Id": sde.info.campaignId,
//         };
//     } else if (sde.type === "personal") {
//         formattedSDE = {
//             // type: sdeMapping[sde.type],
//             "First name": sde.personal.firstname,
//             "Last name": sde.personal.lastname,
//             "Age": sde.personal.age.age,
//             "Date of birth": `${sde.personal.age.month}/${sde.personal.age.day}/${sde.personal.age.year}`,
//             "Email": sde.personal.contacts[0].email,
//             "Phone": sde.personal.contacts[0].phone,
//             "Country": sde.personal.contacts[0].address.country,
//             "Region": sde.personal.contacts[0].address.region,
//         };
//     } else if (sde.type === "lead") {
//         formattedSDE = {
//             // type: sdeMapping[sde.type],
//             "Topic": sde.lead.topic,
//             "Value": sde.lead.value,
//             "Currency": sde.lead.currency,
//             "Lead Id": sde.lead.leadId,
//         };
//     } else if (sde.type === "service") {
//         formattedSDE = {
//             // type: sdeMapping[sde.type],
//             "Topic": sde.service.topic,
//             "Status": sde.service.status,
//             "Category": sde.service.category,
//             "Service Id": sde.service.serviceId,
//         };
//     } else if (sde.type === "error") {
//         formattedSDE = {
//             // type: sdeMapping[sde.type],
//             "Context Id": sde.error.contextId,
//             "Error message": sde.error.message,
//             "Error code": sde.error.code,
//             "Level": sde.error.level,
//             "Resolved": sde.error.resolved,
//         };
//     } else if (sde.type === "searchInfo") {
//         formattedSDE = {
//             // type: sdeMapping[sde.type],
//             "Recently searched terms": sde.keywords,
//         };
//     }

//     return formattedSDE;
// };

const CustomWidget = () => {
    return (
        <div class="w-full h-screen bg-violet-800">
            <div class="w-full max-w-md p-2 mx-auto bg-violet-900 rounded-2xl">
                <Accordion class="space-y-2" defaultValue={SDEs} toggleable multiple>
                <For each={tempSDEs}>
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