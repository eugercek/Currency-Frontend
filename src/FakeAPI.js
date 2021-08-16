const currencyNameList = ["USD", "CHF", "EUR", "CAD"];

const randomBetween = (min, max) => (Math.random() * (max - min)) + min;

export const currencies = currencyNameList.map((name) => ({
    name: name,
    buyingPrice: randomBetween(3, 5),
    sellingPrice: randomBetween(3, 5),
}));