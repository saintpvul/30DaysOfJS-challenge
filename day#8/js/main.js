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
    name: "laptop",
    description: "MacPro: System Darwin",
    price: 2500,
    ratings: [],
    likes: ["fg12cy"],
  },
  {
    _id: "hedfcg",
    name: "tv",
    description: "Smart TV:Procaster",
    price: 400,
    ratings: [{ userId: "fg12cy", rate: 5 }],
    likes: ["fg12cy"],
  },
];

/*

The products array has three elements and each of them has six properties. a. Create a function called rateProduct which rates the product b. Create a function called averageRating which calculate the average rating of a product

*/

function rateProduct() {
  let user = prompt("Enter your id: ") || "Unknown",
    prod = "",
    idx = 0,
    rate = 0;

  function getProduct() {
    let product = prompt("Which product do you want to rate?");
    if (product) {
      product = product.toLowerCase();
      if (/tv|laptop|mobile phone/.test(product)) {
        prod = product;
        if (product === "tv") idx = 2;
        if (product === "laptop") idx = 1;
        if (product === "mobile phone") idx = 0;
      } else {
        alert("Wrong product. You can rate only: TV, Laptop, Mobile phone");
        getProduct();
      }
    } else {
      if (
        confirm(
          "The product was'nt selected. Do you want to continue, or stop this programm?"
        ) == true
      ) {
        getProduct();
      } else {
        alert("You canceled this program");
      }
    }
  }

  function getRate() {
    let rating = prompt("Rate this product from 0 to 5 :");
    rating = +rating;
    if (rating > 5 || rating < 0 || !/\d/g.test(rating)) {
      alert("WRONG VALUE! Please, enter correct value.");
      getRate();
    } else {
      rate = rating;
    }
  }

  getProduct();

  if (prod) {
    getRate();
  }

  if (rate) {
    products[idx].ratings.push({ user, rate });
  } else {
    alert(
      `I still do not have your rate for ${prod}\nEnter your rate, please!`
    );
    getRate();
  }
  console.log(products[idx].ratings);
}

rateProduct();
