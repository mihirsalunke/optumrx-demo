export const cartSDE = {
  "type": "cart", //MANDATORY
  "total": 25.2, //TOTAL CART VALUE
  "currency": "USD", //CURRENCY CODE
  "numItems": 3, //NUMBER OF ITEMS IN CART
  "products": [{ //ARRAY OF PRODUCTS
    "product": {
      "name": "prod1", //PRODUCT NAME
      "category": "category1", //PRODUCT CATEGORY NAME
      "sku": "sku1", //PRODUCT SKU OR UNIQUE IDENTIFIER
      "price": 7.8 //PRODUCT PRICE
    }, "quantity": 1 //NUMBER OF PRODUCTS
  },
  {
    "product": {
      "name": "prod2", //PRODUCT NAME
      "category": "categor2", //PRODUCT CATEGORY NAME
      "sku": "sku2", //PRODUCT SKU OR UNIQUE IDENTIFIER
      "price": 8.7 //PRODUCT PRICE
    }, "quantity": 2 //NUMBER OF PRODUCTS
  }],
};