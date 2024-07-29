####---- List patients --------------------------------------------------------
curl localhost:3000/api/patients | jq


####---- Create patient -------------------------------------------------------
curl -X POST localhost:3000/api/patients \
  -H "Content-Type: application/json" \
  -d '{
    "identifierType": "OTHER",
    "sex": "MALE",
    "maritalStatus": "SINGLE",
    "insuranceType": "PRIVATE",
    "firstName": "William",
    "middleName": null,
    "patternalLastName": "Doe",
    "maternalLastName": "Johnson",
    "identifier": "1234567890",
    "birthDate": "2000-01-01T00:00:00Z",
    "address": "123 Main St",
    "cellphone": "1234567890",
    "email": "william.doe@uvita.com"
  }' | jq


####---- Get patient ----------------------------------------------------------
curl localhost:3000/api/patients/3 | jq


####---- Update patient -------------------------------------------------------
curl -X PUT localhost:3000/api/patients/3 \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "William",
    "middleName": "Shakespeare",
    "patternalLastName": "Doe",
    "maternalLastName": "Johnson",
    "identifier": null,
    "birthDate": "1998-01-01T00:00:00Z"
  }' | jq


####---- Delete patient -------------------------------------------------------
curl -X DELETE localhost:3000/api/patients/3 | jq
