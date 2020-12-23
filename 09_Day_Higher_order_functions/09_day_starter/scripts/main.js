//lvl1

const countries = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];
const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

countries.forEach((country) => console.log(country));
names.forEach((name) => console.log(name));
numbers.forEach((number) => console.log(number));
countries.map((country) => country.toUpperCase());
countries.map((country) => country.length);
numbers.map((number) => Math.pow(number, 2));
names.map((name) => name.toUpperCase());
const priceProduct = products.map((product) => product.price);
const landCountry = countries.filter((country) => country.includes("land"));
const len6 = countries.filter((country) => country.length === 6);
const lenAbove6 = countries.filter((country) => country.length >= 6);
const startWithE = countries.filter((country) => country.startsWith("F"));
const priceWithVal = products.filter(
  (product) => typeof product.price == "number"
);

const getStringLists = (arr) => {
  arr.filter((array) => typeof array == "string");
};
const sumNum = numbers.reduce((acc, cur) => acc + cur);
const countriesName = countries.reduce((prev, current, index) => {
  return index == 0 ? current : prev + ", " + current;
});
console.log(countriesName + " are north European countries");

const someName = names.some((name) => name.length > 7);
const everyCountries = countries.every((country) => country.includes("land"));
const findCountry6 = countries.find((country) => country.length == 6);
const findCountryIndex = countries.findIndex((country) => country.length == 6);
const findNorway = countries.findIndex((country) => country == "Norway");
const findRussia = countries.findIndex((country) => country == "Russia");

//lvl2

const filterPrice = products.filter(
  (product) => typeof product.price == "number"
);
const mapPrice = filterPrice.map((product) => product.price);
const totalPrice = mapPrice.reduce((acc, cur) => acc + cur, 0);
console.log(totalPrice);

const a = products
  .sort((a, b) => a.price - b.price)
  .slice(2)
  .map((a) => a.price);
console.log(a.reduce((acc, curr) => acc + curr));

const categorizeCountries = (arr) => {
  const filterCountry = arr.filter(
    (arr) =>
      arr.name.includes("land") ||
      arr.name.includes("ia") ||
      arr.name.includes("island") ||
      arr.name.includes("stan")
  );
  return filterCountry;
};

console.log(categorizeCountries(countrie));

const tenCount = (arr) => {
  //   return arr.slice(0, 10);
  //   return arr.splice(0, 10);
};

console.log(tenCount(countrie));

const getLastTenCountries = (arr) => {
  return arr.slice(-10);
};

console.log(getLastTenCountries(countrie));

//lvl3

const copyCountrie = [...countrie];

const sortNameCountrie = (a, b) => {
  if (a.name > b.name) return 1;
  if (a.name < b.name) return -1;
  return 0;
};

const byCapital = copyCountrie.sort((a, b) => {
  if (a.capital > b.capital) return 1;
  if (a.capital < b.capital) return -1;
  return 0;
});

const byPopulation = copyCountrie.sort((a, b) => a.population - b.population);

const overCopy = [...countrie];

