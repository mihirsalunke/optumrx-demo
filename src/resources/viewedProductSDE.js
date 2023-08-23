export const viewedProductSDE = {
    "type": "prodView", //MANDATORY
    "currency": "USD", //CURRENCY CODE
    "products": [{ //ARRAY OF PRODUCTS
        "product": {
            "name": "red high heel shoe", //PRODUCT NAME
            "category": "women shoes", //PRODUCT CATEGORY NAME
            "sku": "xyz567", //PRODUCT SKU OR UNIQUE IDENTIFIER
            "price": 77.8, //SINGLE PRODUCT PRICE
            "statusInStock": "high",  //PRODUCT STATUS IN STOCK
            "quantityInStock": 700  //AVAILABLE QUANTITY IN STOCK
        }
    },
    {
        "product": {
            "name": "nike air jordan 1", //PRODUCT NAME
            "category": "men shoes", //PRODUCT CATEGORY NAME
            "sku": "abc567", //PRODUCT SKU OR UNIQUE IDENTIFIER
            "price": 170.99, //SINGLE PRODUCT PRICE
            "statusInStock": "low",  //PRODUCT STATUS IN STOCK
            "quantityInStock": 2  //AVAILABLE QUANTITY IN STOCK
        }
    }],
};