//lvl1

const firstName = "Pablo";
const lastName = "Roletsky";
const country = "Grenland";
const city = "North Pole";
const age = 33;
const isMarried = false;
const year = 2020;
const assign = 15000;

console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year);
console.log(typeof assign);

console.log("10" == 10);
console.log(parseInt("9.8") == 10);

console.log("10" == 10);
console.log(0 == false);
console.log(1 == true);

console.log(1 === true);
console.log(!2 > 0 == true);
console.log(2 === "2");

//5
true;
true;
false;
false;
true;
true;
false;
false;
false;
true;
false;
console.log("python".length !== "jargon".length);

//6
true;
false;
true;
true;
false;
true;
true;
false;
true;
true;

console.log(new Date().getFullYear());
console.log(new Date().getMonth() + 1);
console.log(new Date());
console.log(new Date().getDate());
console.log(new Date().getHours());
console.log(new Date().getMinutes());
console.log(new Date().getTime());

//lvl2

const base = prompt("enter base of triangle", 10);
const height = prompt("enter height of triangle", 20);
const area = 0.5 * base * height;
console.log(area);

const a = Number(prompt("enter side a", 5));
const b = Number(prompt("enter side b", 4));
const c = Number(prompt("enter side c", 3));
const perimeter = a + b + c;
console.log(perimeter);

const z = Number(prompt("enter length", 20));
const x = Number(prompt("enter width", 5));
const area2 = z * x;
console.log(area2);
console.log((perimeter2 = 2 * (z + x)));

// 4,5,6,7,8,9 => only calculate, no programming - I skipped it

const hours = Number(prompt("enter a hours", 40));
const ratePerHour = Number(prompt("enter a rate per hours", 10));
const payment = hours * ratePerHour + "$ per week ";
console.log(payment);

const sayName = Number(prompt("what's your name?"));

sayName > 7
  ? console.log("your name is long")
  : console.log("your name is short");

const name2 = "Pablo";
const surname2 = "Roletsky";

name2.length > surname2.length
  ? console.log(
      `Your first name, ${name2} is longer than your family name, ${surname2}`
    )
  : console.log(
      `Your first name, ${name2} is shorten than your family name, ${surname2}`
    );

let myAge = 250;
let yourAge = 25;

console.log(`I am ${myAge - yourAge} years older than you.`);

const userAge = Number(prompt("enter your age"));

userAge >= 18
  ? console.log(`You are ${userAge}. You are old enough to drive`)
  : console.log(
      `You are ${userAge}. You will be allowed to drive after ${18 - userAge}`
    );

const howOldAreYou = Number(prompt("enter number of years"));

console.log(`you lived: ${howOldAreYou * 365 * 24 * 60 * 60} seconds`);

//lvl3

console.log(
  new Date().toLocaleDateString([], {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  })
);
