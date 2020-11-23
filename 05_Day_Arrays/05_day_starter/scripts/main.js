//lvl1

const array = [];
const array1 = new Array();
const fiveArray = new Array(1, 2, 3, 4, 5);
const fiveArray1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const lenArray = fiveArray.length;

const firstArray = fiveArray[0];
const middleArray = fiveArray1[Math.floor((fiveArray1.length - 1) / 2)];
const lastArray = fiveArray[fiveArray.length - 1];
const mixedDataTypes = [
  "apple",
  "banana",
  "blueberry",
  "strawbery",
  "pear",
  "limon",
].length;
const itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];
const firstCompany = itCompanies[0];
const middleCompany = itCompanies[Math.floor(itCompanies.length - 1) / 2];
const lastCompany = itCompanies[itCompanies.length - 1];

// if (itCompanies.indexOf('Apple') !== -1) {
//   console.log("company is there");
// } else {
//   console.log("company not here");
// }

const sentece = itCompanies.join(", ").concat(" are bit IT companies");
// const sortCompanies = itCompanies.sort();
// const reverseCompanies = itCompanies.reverse();
const sliceFirst3 = itCompanies.slice(0, 3);
const sliceLast3 = itCompanies.slice(-3);
const middleCompanySlice = itCompanies[
  Math.floor((itCompanies.length - 1) / 2)
].slice();
const removeFirstC = itCompanies.shift();
const splitCompany2 = itCompanies.splice(2, 1);
const removeLast = itCompanies.pop();
const removeAll = itCompanies.splice();

console.log(removeAll);

//lvl2

let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";

const textArray = text.split(" ");

const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
shoppingCart.unshift("Meat");
shoppingCart.push("Sugar");
shoppingCart.splice(4, 1);
shoppingCart[3] = "Green Tea";

const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];
const fullStack = frontEnd.concat(backEnd);

console.log(fullStack);

//lvl3

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

sortStudents = ages.sort((a, b) => a - b);
console.log(sortStudents)
sortStudentsMin2 = ages[0];
sortStudentsMax2 = ages[ages.length - 1];
sortStudentsMin = Math.min(...ages);
sortStudentsMax = Math.max(...ages);

const sumOfStudents = ages.reduce((sum, acc) => (sum += acc));
const averageStudents = Math.ceil(sumOfStudents / ages.length);

const mid = Math.ceil(ages.length / 2);
const miedianaStudents =
  ages.length % 2 == 0
    ? (sortStudents[mid] + sortStudents[mid - 1]) / 2
    : sortStudents[mid - 1];

console.log(miedianaStudents);
