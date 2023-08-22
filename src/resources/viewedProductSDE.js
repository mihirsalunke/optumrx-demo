const viewedProductSDE = {
    "type": "prodView", //MANDATORY
    "currency": "USD", //CURRENCY CODE
    "products": [{ //ARRAY OF PRODUCTS
        "product": {
            "name": "red high heel shoe", //PRODUCT NAME
            "category": "women shoes", //PRODUCT CATEGORY NAME
            "sku": "xyz567", //PRODUCT SKU OR UNIQUE IDENTIFIER
            "price": 77.8, //SINGLE PRODUCT PRICE
            "statusInStock": "low",  //PRODUCT STATUS IN STOCK
            "quantityInStock": 7  //AVAILABLE QUANTITY IN STOCK
        }
    }]
};