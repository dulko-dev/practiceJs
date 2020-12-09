//lvl1

function fullName(name, surname) {
  return `${name} ${surname}`;
}

console.log(fullName("Michael", "Diggerson"));

function getName(name, surname) {
  const fullName = `${name} ${surname}`;
  return fullName;
}

console.log(getName("Michael", "Diggerson"));

const addNumbers = (num1, num2) => {
  const sum = num1 + num2;
  return sum;
};
console.log(addNumbers(3, 4));

function areaOfRectangle(length, width) {
  const area = length * width;
  return area;
}
console.log(areaOfRectangle(5, 10));

// 5,6,7,8,9 only calculation

const speed = (distance, time) => {
  const result = distance / time + "km/h";
  return result;
};
console.log(speed(90, 1.5));

const convertCToF = (c) => {
  const oF = c * (9 / 5) + 32 + "F";
  return oF;
};

console.log(convertCToF(100));

function BMIcalculation(weight, height) {
  const result = weight / height ** 2;

  if (result < 18.5) {
    console.log("underweight");
  } else if (result >= 18.5 && result <= 24.9) {
    console.log("normal weight");
  } else if (result >= 25.0 && result <= 29.9) {
    console.log("overweight");
  } else {
    console.log("obsese");
  }
  return result;
}

console.log(BMIcalculation(58, 1.8));

const whatSeason = (month) => {
  let chooseSeason = month.toLowerCase();
  switch (chooseSeason) {
    case "december":
    case "january":
    case "february":
      console.log("winter");
      break;
    case "march":
    case "april":
    case "may":
      console.log("spring");
      break;
    case "june":
    case "july":
    case "september":
      console.log("summer");
      break;
    case "august":
    case "october":
    case "november":
      console.log("autumn");
      break;
    default:
      console.log("how you dare");
  }
};

whatSeason("APril");

const largestArg = (...numbers) => {
  let result;
  for (const element of numbers) {
    result = Math.max(element);
  }
  return result;
};

console.log(largestArg(3, 5, 7, 77777, 132312321, 1231231230));

//lvl2

function solveLineEquation(x, a, b, c) {
  let y = -((a / b) * x) - c / b;
  return y;
}

console.log(solveLineEquation(1, 1, 1, 1));

///// come back //////

// function solveQuadEquation(a, b, c) {

//   let x1 = -b + Math.sqrt(Math.pow(b, 2) - 4 * (a * c)) / (2 * a);
//   let x2 = -b - Math.sqrt(Math.pow(b, 2) - 4 * (a * c)) / (2 * a);
//   const resultOfx = { x1, x2 };
//   return resultOfx;
// }

// console.log(solveQuadEquation());
// console.log(solveQuadEquation(1, 4, 4));
// console.log(solveQuadEquation(1, -1, -2));
// console.log(solveQuadEquation(1, 7, 12));
// console.log(solveQuadEquation(1, 0, -4));
// console.log(solveQuadEquation(1, -1, 0));

const printArray = (array) => {
  const loopAr = array.map((e) => e);
  return loopAr;
};

console.log(printArray([1, 2, 3, 4, 5]));

const showDateTime = () => {
  const d = new Date();
  const time = `${d.toLocaleDateString()} ${d.toLocaleTimeString()}`;
  return time;
};
console.log(showDateTime());

function swapValue(x, y) {
  [x, y] = [y, x];
  return { x, y };
}
console.log(swapValue(2, 3));

function reverseArray(array) {
  let newArray = [];
  for (i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }
  return newArray;
}
console.log(reverseArray([1, 2, 3, 4, 5]));

function capitalizeArray(text) {
  return text.toUpperCase();
}

console.log(capitalizeArray("ziomek zioMEk"));

let array = [];

const addItem = (text) => {
  array.push(text);
  return array;
};
console.log(addItem("ziomek"));
console.log(addItem("castle"));
console.log(addItem("geek"));
console.log(addItem("fulfil"));

const removeItem = (text) => {
  if (array.indexOf(text) > -1) {
    array.splice(text, 1);
  }
  return array;
};
console.log(removeItem("castle"));

let sumOfNum = 0;
const sumOfNumbers = (arg) => {
  for (i = 0; i <= arg; i++) {
    sumOfNum += i;
  }
  return sumOfNum;
};

console.log(sumOfNumbers(100));

let sum1 = 0;
const sumOfOdds = (num) => {
  for (i = 0; i <= num; i++) {
    if (i % 2 != 0) {
      sum1 += i;
    }
  }
  return sum1;
};
console.log(sumOfOdds(100));

let sum2 = 0;
const sumOfEvents = (num) => {
  for (i = 0; i <= num; i++) {
    if (i % 2 == 0) {
      sum2 += i;
    }
  }
  return sum2;
};
console.log(sumOfEvents(100));

let oddsNum = 0;
let evensNum = 0;

const evensAndOdds = (arg) => {
  for (i = 0; i <= arg; i++) {
    if (i % 2 === 0) {
      evensNum += 1;
    } else {
      oddsNum += 1;
    }
  }
  return { oddsNum, evensNum };
};

console.log(evensAndOdds(100));

let sum = 0;
const sumOfArguments = (...num) => {
  for (number of num) {
    sum += number;
  }
  return sum;
};

console.log(sumOfArguments(1, 2, 3));

const randomUserIp = () => {
  let randomNumber = [];
  for (i = 0; i < 4; i++) {
    let generateNum = Math.floor(Math.random() * 256);
    randomNumber[i] = generateNum;
  }
  return randomNumber;
};
console.log(randomUserIp());

// 16,17,18 - same examples are on 06_day_loops

//lvl3

const randomNumberOf7 = () => {
  let array = [];
  for (let i = 0; array.length < 7; i++) {
    const num = Math.floor(Math.random() * 10);
    if (array.indexOf(num) === -1) {
      array.push(num);
    }
  }
  return array;
};

console.log(randomNumberOf7());

const array2 = [1,2,3,4,5]
let array2Copy = [...array2];
let reverseArray2 = array2Copy.reverse();

console.log(array2)
console.log(reverseArray2)