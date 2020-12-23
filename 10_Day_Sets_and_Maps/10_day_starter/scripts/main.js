// lvl1

const newSet = new Set();

for (i = 0; i <= 10; i++) {
  newSet.add(i);
}

newSet.delete(1);
newSet.clear();

const newSetArray = new Set();
const array = [1, 2, 3, 4, 5];
for (const element of array) {
  newSetArray.add(element);
}

const countries2 = ["Finland", "Sweden", "Norway"];

const mapOfCountires = new Map();

mapOfCountires.set("Finland", "Helsinki");
mapOfCountires.set("Sweden", "Stokholm");
mapOfCountires.set("Norway", "Oslo");

for (const [country, capital] of mapOfCountires) {
  console.log({ country: country.length, capital: capital.length });
}

//lvl2
const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];

//1
const aAr = [...a, ...b];
console.log(new Set(aAr));

//2
const B = new Set(b);

let c = a.filter((num) => B.has(num));
let cSet = new Set(c);
console.log(cSet);

//3
const differAB = a.filter((num) => !B.has(num));
console.log(new Set(differAB));
