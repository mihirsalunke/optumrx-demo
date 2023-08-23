export const transactionSDE = {
  "type": "purchase", //MANDATORY
  "total": 11.7, //TOTAL VALUE OF THE TRANSACTION AFTER DISCOUNT
  "currency": "USD", //CURRENCY CODE
  "orderId": "DRV1534XC", //UNIQUE ORDER ID OR RECEIPT ID
  "cart":{
    "products": [{
      "product": {
      "name": "antivirus pro plan", //PRODUCT NAME
        "category": "software", //PRODUCT CATEGORY NAME
        "sku": "xyz001", //PRODUCT SKU OR UNIQUE IDENTIFIER
        "price": 7.8 //SINGLE PRODUCT PRICE
      },
      "quantity": 3 //QUANTITY OF THIS PRODUCT
    },
    {
      "product": {
        "name": "dental premium plan", //PRODUCT NAME
        "category": "health", //PRODUCT CATEGORY NAME
        "sku": "abc001", //PRODUCT SKU OR UNIQUE IDENTIFIER
        "price": 250.7 //SINGLE PRODUCT PRICE
      },
      "quantity": 1 //QUANTITY OF THIS PRODUCT
    }],
  }
};