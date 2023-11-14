# Utility Functions for JavaScript

This repository contains two utility functions written in JavaScript:

## normalizeZipCode Function

### Purpose
The `normalizeZipCode` function standardizes postal codes (ZIP codes) by removing non-numeric characters and formatting them into a standardized structure.

### Functionality
- Removes non-numeric characters.
- Validates the format: either a 5-digit or 8-digit ZIP code.
- Returns the normalized ZIP code in the format 'xxxxx' or 'xxxxx-xxx'.

## convertCurrency Function

### Purpose
The `convertCurrency` function enables currency conversion based on fixed exchange rates or an external API (not implemented in this example).


### Functionality
- Performs currency conversion using predefined exchange rates.
- Can be modified to fetch real-time exchange rates from an external API.

### Usage
- Use `normalizeZipCode(zipcode)` to clean and format ZIP codes.
- Use `convertCurrency(amount, fromCurrency, toCurrency)` for currency conversion tasks.

```shell
npm i npm-package-study-lscr
```

```js
const {normalizeZipCode, convertCurrency} = require("npm-package-study-lscr")
```

## Notes
- These functions serve as basic examples and may need adjustments for specific use cases or integration with external services.
- Ensure proper error handling and validation mechanisms when using these functions in a production environment.

Feel free to add more details or instructions to better suit your project's needs!
