# Fiscalizer API Client

## Description

The Fiscalizer API Client is a Node.js project aimed at providing fiscalization services according to Croatian taxation law.

Initially it's meant for Travel agencies and it covers most of the cases for Travel agencies registered in Croatia.

Travel agency for which package was developed: [Travelspot](http://app.travelspot.com/)

### Requests

- RegularProcedureRequest: Redovni postupak oporezivanja.

- TravelAgenciesAndTravelOrganizersServicesRequest: Usluge obavljene u svoje ime, a za tuđi račun.

- ExemptedTransactionsRequest: Oslobođene transakcije.

## Latest Updates

As of June 20, 2023, the project's structure was updated to include fiscalization services for various travel agencies.

## Requirements

To use the Fiscalizer JavaScript client library, you'll need to be using **Node.js v18 (LTS)** or later.

You can only use the library in **server-side** JavaScript applications developed in Node.js. It won't work in frontend applications that run in your users' browsers.

## Usage

To get started, import the `FiscalizerAPI` module into your code and initialize it.

```javascript
import { FiscalizerAPI } from 'fiscalizer-api'

const fiscalizerAPI = new FiscalizerAPI({
  // Give a name of the source accessing to the API.
  source: process.env.YOUR_SOURCE,
})

// To quickly test whether your integration is working, you can fiscalize flight invoice for example.
const fiscalizedFlight = await fiscalizerAPI.fiscalizeFlightDuffel.post(fiscalData);
console.log(fiscalizedFlight)
```

### TypeScript

The FiscalizerAPI JavaScript client library is written in TypeScript and comes with types for Fiscalizer API objects, which you can easily import.

```javascript
import { FiscalizationResponse } from 'fiscalizer-api'

const response = await fiscalizerAPI.fiscalizeFlightDuffel.post(invoice_data);
const fiscalizeAmadeusEU: FiscalizationResponse = response.data;
console.log(fiscalizeAmadeusEU);
```

Expected output from `console.log(fiscalizeAmadeusEU)`:

```json
{
  "data": [
    {
      "JIR": "4f392838-cbe5-4f13-b422-1bd2c10b962c",
      "messageId": "ead03805-6e5c-4c2c-855b-c7c17455100e",
      "dateTime": "dd.mm.ggggThh:mm:ss"
    }
  ]
}
```

#### Errors

If there are any errors with your request, the client library will throw an error which you can catch.

You'll find information about what was wrong in the `errors` field, and useful context like the `message` or `status`.

```javascript
try {
  const test = await fiscalizerAPI.fiscalizeFlightDuffel.post({ additionalProp: [] });
  console.log(test)
} catch (error) {
  console.log(error)
}
```

Expecting output from `console.log(error)` similar to:

```
[ValidationError] {
  errors: [
    {
      code: '422',
      documentation_url: '',
      message: 'this field has unspecified keys: additionalProp',
      title: 'validation_error',
      type: 'noUnknown'
    }
  ]
}
```

## Installation

To install this project, you will need Node.js version 18 or later. You can clone the repository and install its dependencies using npm:

```shell
git clone https://github.com/bbopar/fiscalizer-api.git
cd fiscalizer-api
npm install
```

## Build

To run the project, you can use the following command:

```shell
npm run build
```

## Testing

Tests can be run using the following command:

```shell
npm run test
```


## Documentation
Can be found here [Technical specification](https://www.porezna-uprava.hr/HR_Fiskalizacija/Documents/Fiskalizacija%20-%20Tehnicka%20specifikacija%20za%20korisnike_v2.1.pdf)

## Contributing

Contributions are welcome. Please open an issue first to discuss what you would like to change.
