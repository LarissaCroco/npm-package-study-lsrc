// Função para normalizar um código postal (CEP)
function normalizeZipCode(zipcode) {
    // Remove todos os caracteres não numéricos do zipcode
    const normalized = zipcode.replace(/\D/g, '');

    // Verifica se o CEP normalizado corresponde ao formato (5 dígitos ou 9 dígitos)
    if (/^\d{5}$/.test(normalized) || /^\d{8}$/.test(normalized)) {
        // Formata o CEP: 'xxxxx' ou 'xxxxx-xxx'
        return normalized.length === 5 ? normalized : `${normalized.slice(0, 5)}-${normalized.slice(5)}`;
    } else {
        return 'Formato inválido de CEP';
    }
}


// Função para converter moedas
// Os valores das taxas de câmbio que usei no exemplo são fictícios 
// e foram inventados para ilustrar como uma função de conversão de moeda poderia funcionar. 
// Em situações reais, você precisaria acessar uma API de serviço financeiro ou uma fonte 
// confiável que forneça taxas de câmbio em tempo real.
// Adicione mais taxas de câmbio conforme necessário
function convertCurrency(amount, fromCurrency, toCurrency) {
    // Aqui você pode substituir a lógica com uma API real de conversão de moedas
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

    // Verifica se as moedas estão presentes nas taxas de câmbio
    if (!exchangeRates[fromCurrency] || !exchangeRates[fromCurrency][toCurrency]) {
        return "Conversão não suportada";
    }

    // Faz a conversão
    const result = amount * exchangeRates[fromCurrency][toCurrency];
    return result.toFixed(2); // Retorna o resultado com duas casas decimais
}


// Exportando as funções para uso em outros arquivos 
module.exports = { normalizeZipCode, convertCurrency };
