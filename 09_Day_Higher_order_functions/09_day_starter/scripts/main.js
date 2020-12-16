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
