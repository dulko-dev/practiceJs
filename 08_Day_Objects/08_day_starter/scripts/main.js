//lvl1
const dog = {};
console.log(dog);
dog.name = "Dude";
dog.legs = 4;
dog["color"] = "black";
dog["age"] = 7;
dog.bark = function () {
  return `woof woof`;
};
console.log(dog["name"]);
console.log(dog["legs"]);
console.log(dog.color);
console.log(dog.age);
console.log(dog.bark());

dog.breed = "mix";
dog.getDogInfo = function () {
  return `${this.name}, ${this.legs}, ${this.color} ${
    this.age
  } ${this.bark()} ${this.breed}`;
};
console.log(dog.getDogInfo());

//lvl2
const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};


for (const [key, values] of Object.entries(users)) {
  console.log(key, values.isLoggedIn, values.points);
}

users.Pablo = {};

console.log(Object.keys(users));
console.log(Object.values(users));

for (element of countries) {
  console.log(
    element.name,
    element.capital,
    element.population,
    element.languages
  );
}

//lvl3

const signUp = (a) => {
  if (users[a]) {
    console.log("there is exist name already");
  } else {
    users[a] = {};
  }
};

const signIn = (a) => {
  if (users[a]) {
    console.log("you are signed");
  } else {
    console.log("please check you userName");
  }
};

signIn("Asab");

const products = [
  {
    _id: "eedfcf",
    name: "mobile phone",
    description: "Huawei Honor",
    price: 200,
    ratings: [
      { userId: "fg12cy", rate: 5 },
      { userId: "zwf8md", rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: "aegfal",
    name: "Laptop",
    description: "MacPro: System Darwin",
    price: 2500,
    ratings: [],
    likes: ["fg12cy"],
  },
  {
    _id: "hedfcg",
    name: "TV",
    description: "Smart TV:Procaster",
    price: 400,
    ratings: [{ userId: "fg12cy", rate: 5 }],
    likes: ["fg12cy"],
  },
];

const rateProduct = (id, rate) => {
  let key = "abcdefghijklmnoprstquwxyz0123456789";
  let userId = "";
  for (i = 0; i < 6; i++) {
    randomNumber = key.charAt(Math.ceil(Math.random() * key.length));
    userId += randomNumber;
  }
  for (element of products) {
    if (element._id == id) {
      element.ratings.push({ userId: userId, rate: rate });
    }
  }
};

rateProduct("aegfal", 5);
