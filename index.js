/**
 * Function to normalize a ZIP code
 * @param {string} zipcode - The ZIP code to be normalized
 * @returns {string} - The normalized ZIP code
 */
function normalizeZipCode(zipcode) {
    const normalized = zipcode.replace(/\D/g, '');

    if (/^\d{5}$/.test(normalized) || /^\d{8}$/.test(normalized)) {
        // zipcode: 'xxxxx' or 'xxxxx-xxx'
        return normalized.length === 5 ? normalized : `${normalized.slice(0, 5)}-${normalized.slice(5)}`;
    }
    return 'Formato inválido de CEP';

}


/**
 * Function to convert currencies
 * The exchange rates used in the example are fictional.
 * In real scenarios, access a financial service API or a reliable source 
 * for real-time exchange rates.
 * Add more exchange rates as needed.
 * @param {number} amount - The amount to be converted
 * @param {string} fromCurrency - The currency to convert from
 * @param {string} toCurrency - The currency to convert to
 * @returns {string|number} - The converted amount or an error message
 */
function convertCurrency(amount, fromCurrency, toCurrency) {
    const exchangeRates = {
        USD: {
            EUR: 0.85,
            GBP: 0.73,
            JPY: 114.01,
            BRL: 4.86,
        },
        EUR: {
            USD: 1.18,
            GBP: 0.86,
            JPY: 129.54,
            BRL: 5.29,
        },
        GBP: {
            USD: 1.38,
            EUR: 1.16,
            JPY: 150.05,
            BRL: 6.08,
        },
        JPY: {
            USD: 0.0088,
            EUR: 0.0077,
            GBP: 0.0067,
            BRL: 0.032,
        },
    };

    if (!exchangeRates[fromCurrency] || !exchangeRates[fromCurrency][toCurrency]) {
        return "Conversão não suportada";
    }

    const result = amount * exchangeRates[fromCurrency][toCurrency];
    return result.toFixed(2); 
}


// Exporting the functions for use in other Node.js files
module.exports = { normalizeZipCode, convertCurrency };
