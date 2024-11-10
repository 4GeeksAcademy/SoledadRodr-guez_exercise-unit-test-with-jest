// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}
const fromDollarToYen = function(dollar) {
    return parseFloat(((dollar*oneEuroIs.JPY)/oneEuroIs.USD).toFixed(2));
}

const fromYenToPound = (yen) => {
    return parseFloat(((yen*oneEuroIs.GBP)/oneEuroIs.JPY).toFixed(2));
}

module.exports = { fromEuroToDollar , fromDollarToYen , fromYenToPound }