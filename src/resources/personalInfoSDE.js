const personalInfoSDE = {
    "type": "personal", //MANDATORY
      "personal": {
        "firstname": "John", // FIRST NAME
        "lastname": "Doe", // SURNAME
        "age": {
            "age": 34, // AGE AS INTEGER
            "year": 1980, // BIRTH YEAR
            "month": 4, // BIRTH MONTH
            "day": 15 // BIRTH DAY
          },
        "contacts": [{
          "email": "myname@example.com", // EMAIL
          "phone": "+1 212-788-8877", // PHONE NUMBER
          "address": {
            "country": "Russia", // COUNTRY
            "region": "Moscow" // REGION
            }
        }],
        "gender": "MALE", // MALE, FEMALE, OTHER
        "language": "en-US", // LANGUAGE
        "company": "company" // VISITOR COMPANY NAME
      }
};