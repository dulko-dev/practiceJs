const nameChallenge = "30 Days Of JavaScript";
const nameCompany = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
const because =
  "You cannot end a sentence with because because because is a conjunction";
const love =
  "Love is the best thing in this world. Some found their love and some are still looking for their love.";
const sentence =
  "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";
const annual =
  "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month";

//lvl 1

console.log(nameChallenge);
console.log(nameChallenge.length);
console.log(nameChallenge.toUpperCase());
console.log(nameChallenge.toLowerCase());
console.log(nameChallenge.substr(0, 2));
console.log(nameChallenge.substring(0, 2));
console.log(nameChallenge.substring(3));
console.log(nameChallenge.includes("Script"));
console.log(nameChallenge.split());
console.log(nameChallenge.split(" "));
console.log(nameCompany.split(","));
console.log(nameChallenge.replace("JavaScript", "Python"));
console.log(nameChallenge.charAt(15));
console.log(nameChallenge.charCodeAt("J"));
console.log(nameChallenge.indexOf("a"));
console.log(nameChallenge.lastIndexOf("a"));
console.log(because.indexOf("because"));
console.log(because.lastIndexOf("because"));
console.log(because.search("because"));
console.log(nameChallenge.trim());
console.log(nameChallenge.startsWith(30));
console.log(nameChallenge.endsWith("t"));
console.log(nameChallenge.match(/a/g));
console.log(nameChallenge.concat(" - 30 Days Of JavaScript"));
console.log(nameChallenge.repeat(2));

//lvl2

console.log(
  'The quote "There is no exercise better for the heart than reaching \ndown and lifting people up." by John Holmes teaches us to help one \nanother.'
);

console.log(
  "Love is not patronizing and charity isn't about pity, it is about \nlove. Charity and love are the same -- with charity you give love, so \ndon't just give money but reach out your hand instead."
);

const number1 = "10";
console.log(number1 === 10);
const number2 = parseInt(number1);
console.log(number2 === 10);

const number3 = "9.8";
console.log(parseFloat(number3));
console.log(number3 === 10);
number4 = Math.ceil(number3);
console.log(number4 === 10);

if ("python".includes("on") && "jargon".includes("on")) {
  console.log("yes Sir");
}

console.log("I hope this course is not full of jargon".includes("jargon"));

console.log(Math.random() * 101);
console.log(Math.random() * (101 - 50) + 50);
console.log(Math.random() * 256);

const name = "javascript";
console.log(name[Math.floor(Math.random() * name.length)]);

console.log("1 1 1 1 1 \n2 1 2 4 8 \n3 1 3 9 27 \n4 1 4 16 64 \n5 1 5 25 125");

console.log(because.substr(31, 23));

//lvl3

console.log(love.match(/love/g));
console.log(because.match(/because/g));

console.log(sentence.replace(/[^\w\s]/gi, ""));

const regex = /\d+/g;

const allNumbers = annual.match(regex);

const convert = allNumbers.map(function (item) {
  return parseInt(item, 10);
});

const summarize = convert.reduce((sum,res) => {
  return sum + res;
});

console.log(convert);

console.log(summarize);
