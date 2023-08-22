const customerInfoSDE = {
    "type": "ctmrinfo", //MANDATORY
    "info": {
      "cstatus": "cancelled", //CUSTOMER LIFECYCLE STATUS. FROM PRE-DEFINED LIST
      "ctype": "vip", //CUSTOMER TYPE OR TIER. FROM PRE-DEFINED LIST
      "customerId": "138766AC", //UNIQUE CUSTOMER IDENTIFIER
      "balance": -400.99, //THE CUSTOMER FINANCIAL BALANCE IN DECIMAL VALUE
      "currency": "USD", //CURRENCY CODE
      "socialId": "11256324780", //SOCIAL ID OF YOUR CHOICE: FACEBOOK, TWITTER
      "imei": "3543546543545688", //UNIQUE DEVICE OR PHONE IDENTIFIER
      "userName": "user000", //CONSUMER NICKNAME OR USERNAME
      "companySize": 500, //COMPANY SIZE MEASURED BY NUMBER OF EMPLOYEES
      "companyBranch": "East Village", //THE CUSTOMER'S COMPANY BRANCH NAME
      "accountName": "bank corp", //THE CUSTOMER'S COMPANY NAME
      "role": "broker", //CONSUMER ROLE TITLE
      "lastPaymentDate": {
        "day": 15, //THE DAY OF THE LAST PAYMENT NUMERIC VALUE
        "month": 10, //THE MONTH OF THE LAST PAYMENT NUMERIC VALUE
        "year": 2014 //THE YEAR OF THE LAST PAYMENT NUMERIC VALUE
      },
      "registrationDate": {
        "day": 23, //THE DAY OF THE REGISTRATION NUMERIC VALUE
        "month": 5, //THE MONTH OF THE REGISTRATION NUMERIC VALUE
        "year": 2013 //THE YEAR OF THE REGISTRATION NUMERIC VALUE
      },
      "storeNumber": "123865", //STORE NUMBER
      "storeZipCode": "20505" //STORE ZIP CODE
    }
};