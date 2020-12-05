//lvl1

const countriess = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

const webTechss = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

const mernStacks = ["MongoDB", "Express", "React", "Node"];

for (let i = 0; i <= 10; i++) {
  console.log(i);
}

let i = 0;
while (i <= 10) {
  console.log(i);
  i++;
}

let x = 0;
do {
  console.log(x);
  x++;
} while (x <= 10);

for (let i = 10; i >= 0; i--) {
  console.log(i);
}

let z = 10;
while (z >= 0) {
  console.log(z);
  z--;
}

let c = 10;
do {
  console.log(c);
  c--;
} while (c > 0);

// for(let i = 0; i<n; i++){
//     console.log(i)
// }

for (let i = 0; i < 1; i++) {
  console.log("#\n##\n###\n####\n#####\n######\n#######");
}

for (let i = 0; i <= 10; i++) {
  console.log(`${i} * ${i} = ${i * i}`);
}

for (let i = 0; i <= 10; i++) {
  console.log(`${i} ${i ** 2} ${i ** 3}`);
}

for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
for (let i = 0; i <= 100; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

for (let i = 0; i <= 100; i++) {
  let notPrime = false;
  for (let z = 2; z < i; z++) {
    if (i % 2 === 0 && z !== i) {
      notPrime = true;
    }
  }
  if (notPrime === false) {
    console.log(i);
  }
}

let sum = 0;
for (let i = 0; i <= 100; i++) {
  sum = sum + i;
}
console.log(sum);

let sumEvents = 0;
let sumOdds = 0;

for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    sumEvents += i;
  } else sumOdds += i;
}

console.log(sumEvents);
console.log(sumOdds);

let oddsEventsArray = [];
let sumEvents2 = 0;
let sumOdds2 = 0;

for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    sumEvents2 = sumEvents2 + i;
  } else sumOdds2 = sumOdds2 + i;
}

oddsEventsArray.push(sumEvents2, sumOdds2);

console.log(oddsEventsArray);

let array = [];
for (let i = 0; i < 5; i++) {
  const randomNumber = Math.ceil(Math.random() * 100);
  array.push(randomNumber);
}
console.log(array);

let arrayUnique = [];
for (let i = 0; arrayUnique.length < 5; i++) {
  let randomNumber = Math.ceil(Math.random() * 6);
  if (arrayUnique.indexOf(randomNumber) === -1) {
    arrayUnique.push(randomNumber);
  }
}
console.log(arrayUnique);

let characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
let result = "";

for (i = 0; i < 6; i++) {
  let randomCharacters = characters.charAt(
    Math.ceil(Math.random() * characters.length)
  );
  result += randomCharacters;
}
console.log(result);

//lvl2

// let result2 = "";
// let ab = 0;
// console.log(ab);
// while (ab != 2) {
//   let ab = characters.charAt(Math.ceil(Math.random() * characters.length));
//   result2 = result2 + ab;
// }

// console.log(result2);

const hex = "0123456789ABCDEF";
let output = "#" + "";
for (let i = 0; i < 6; ++i) {
  output += hex.charAt(Math.floor(Math.random() * hex.length));
}
console.log(output);

r = Math.floor(Math.random() * 256);
g = Math.floor(Math.random() * 256);
b = Math.floor(Math.random() * 256);
const rgbColor = `rgb(${r},${g},${b})`;
console.log(rgbColor);

const returnCountries = [];
let country;
for (let i = 1; i <= 10; i++) {
  country = countries[Math.floor(Math.random() * countries.length)];
  returnCountries.push(country.toUpperCase());
}

console.log(returnCountries);

let itemsLength = [];
for (i = 0; i < returnCountries.length; i++) {
  let country = returnCountries[i].length;
  itemsLength.push(country);
}
console.log(itemsLength);

const arrayCon = [];

for (i = 0; i < countries.length; i++) {
  arrayCon.push([
    countries[i],
    countries[i].slice(0, 3).toUpperCase(),
    countries[i].length,
  ]);
}
console.log(arrayCon);

const filterArray = arrayCon.filter(([e]) => e.includes("land"));
console.log(filterArray);

const filterArray2 = arrayCon.filter(([e]) => e.endsWith("ia"));
console.log(filterArray2);

let sortCount = countries.sort((a, b) => b.length - a.length);
console.log(sortCount[0]);

const constantCharacters = countries.filter((el) => el.length === 5);
console.log(constantCharacters);

const copyWebTechs = [...webTechss];
const longWeb = copyWebTechs.sort((a, b) => b.length - a.length);
console.log(longWeb[0]);
const arrayWeb = [];

for (i = 0; i < webTechss.length; i++) {
  const array = [webTechss[i], webTechss[i].length];
  arrayWeb.push(array);
}

console.log(arrayWeb);

const mernStack = [];
mernStack.push("MongoDB", "Express", "React", "Node");

for (element of webTechss) {
  console.log(element);
}

const fruitArray = ["banana", "orange", "mango", "lemon"];
const reversMethod = fruitArray.reduceRight((previous, current) => {
  previous.push(current);
  return previous;
}, []);
console.log(reversMethod);

const fullStack = [
  ["HTML", "CSS", "JS", "React"],
  ["Node", "Express", "MongoDB"],
];

const flatArray = fullStack.flat();
console.log(flatArray);

//lvl3

const copyCountries = [...countries];
const sortedCopyCountries = copyCountries.sort();
console.log("original", countries);
console.log("copy", sortedCopyCountries);
const copyTech = [...webTechss];
const copyMernStack = [...mernStack];
console.log(copyTech.sort());
console.log(copyMernStack.sort());
const ladnCount = copyCountries.filter((e) => e.includes("land"));
console.log(ladnCount);
const longCharCount = copyCountries.sort((a, b) => b.length - a.length)[0];
console.log(longCharCount);
const fourChar = copyCountries.filter((e) => e.length === 4);
console.log(fourChar);

const arrayTwo = [];
for (i = 0; i < countries.length; i++) {
  const twoOr = countries[i].split(" ");
  if (twoOr.length >= 2) {
    arrayTwo.push(twoOr.join(" "));
  }
}
console.log(arrayTwo);

const reversCountryUpper = [];
const reversCountries = copyCountries.reverse();

for (country of reversCountries) {
  console.log(country.toUpperCase());
}
console.log(reversCountryUpper);
