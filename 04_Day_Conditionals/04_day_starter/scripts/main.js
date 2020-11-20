//lvl1

const userAge = Number(prompt("enter your age"));
userAge >= 18
  ? console.log("You are old enough to drive")
  : console.log(`You are left with ${18 - userAge} years to drive`);

const myAge = 34;
const yourAge = Number(prompt("enter your age"));

if (myAge > yourAge) {
  console.log(`I am older ${myAge - yourAge} years than you `);
} else {
  console.log(`you are ${yourAge - myAge} years older than me`);
}

let a = 4;
let b = 3;

if (a > b) {
  console.log("a is greater than b");
} else {
  console.log("a is less than b");
}

a > b
  ? console.log(`${a} is greater than ${b}`)
  : console.log("a is less than b");

setNumber = Number(prompt("enter number"));

setNumber % 2 === 0 ? console.log("even") : console.log("odd");

//lvl2

let scores = Number(prompt("enter number"));

switch (true) {
  case scores > 80 && scores < 100:
    console.log("A");
    break;
  case scores > 70 && scores < 79:
    console.log("B");
    break;
  case scores > 60 && scores < 69:
    console.log("C");
    break;
  case scores > 50 && scores < 59:
    console.log("D");
    break;
  default:
    console.log("F");
}
let setMonth = prompt("enter month");

switch (true) {
  case setMonth == "September" ||
    setMonth == "October" ||
    setMonth == "November":
    console.log("Autumn");
    break;
  case setMonth == "December" ||
    setMonth == "January" ||
    setMonth == "February":
    console.log("Winer");
    break;
  case setMonth == "March" || setMonth == "April" || setMonth == "May":
    console.log("Spring");
    break;
  default:
    console.log("Summer");
}

const weekDay = prompt("what is the day today?").toLowerCase();

if (weekDay == "saturday" || weekDay == "sunday") {
  console.log(`${weekDay} is a weekend`);
} else {
  console.log(`${weekDay} is a working day`);
}

//lvl3

let tellMonth = prompt("enter a month").toLowerCase();

switch (tellMonth) {
  case "january":
    console.log(`${tellMonth} has 31 days`);
    break;
  case "february":
    console.log(`${tellMonth} has 28 days`);
    break;
  case "march":
    console.log(`${tellMonth} has 31days`);
    break;
  ////
  default:
    console.log("this is not a month");
}

