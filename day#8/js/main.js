const users = [
  {
    _id: "ab12ex",
    username: "Alex",
    email: "alex@alex.com",
    password: "123123",
    createdAt: "08/01/2020 9:00 AM",
    isLoggedIn: false,
  },
  {
    _id: "fg12cy",
    username: "Asab",
    email: "asab@asab.com",
    password: "123456",
    createdAt: "08/01/2020 9:30 AM",
    isLoggedIn: true,
  },
  {
    _id: "zwf8md",
    username: "Brook",
    email: "brook@brook.com",
    password: "123111",
    createdAt: "08/01/2020 9:45 AM",
    isLoggedIn: true,
  },
  {
    _id: "eefamr",
    username: "Martha",
    email: "martha@martha.com",
    password: "123222",
    createdAt: "08/01/2020 9:50 AM",
    isLoggedIn: false,
  },
  {
    _id: "ghderc",
    username: "Thomas",
    email: "thomas@thomas.com",
    password: "123333",
    createdAt: "08/01/2020 10:00 AM",
    isLoggedIn: false,
  },
];

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

function signUp() {
  let login = "",
    name = "",
    mail = "",
    pass = "";
  login = prompt("Enter your login:");
  login = login.trim().split(" ").join("");
  for (let user of users) {
    if (login.length < 1 && !login) return signUp();
    if (user._id.indexOf(login) != -1) {
      return signIn();
    }
  }
  pass = prompt(`Welcome ${login}! Please create a pass: `);
  if (/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])[A-Za-z0-9]{6,}$/.test(pass)) {
    name = prompt("Nice pass! What is your name?");
  } else {
    alert("Badly pass");
    return signUp();
  }
  mail = prompt(`Nice to meet you, ${name}. Enter your email!`);
  let newUser = { _id: login, username: name, email: mail, password: pass };
  users.push(newUser);
  return users[users.length - 1];
}

signUp();

console.log(users);

function signIn() {
  let login = prompt("Enter your login:"),
    pass = "";
  for (let user of users) {
    if (user._id.indexOf(login) != -1) {
      pass = prompt(
        `I need to verify your password. Please, enter your pass here:`
      );
      if (user[user._id.indexOf(login)].password === pass) {
        console.log("huy");
      }
    }
  }
}
console.log(signIn());
