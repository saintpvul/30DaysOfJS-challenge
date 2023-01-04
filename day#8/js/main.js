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

Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.

*/

function likeProduct() {
  let prod = "",
    idx,
    userId = prompt("Enter your id: ") || "Unknown";

  function getProduct() {
    let product = prompt("What is your product name?");
    if (product) {
      product = product.toLowerCase();
      if (/tv|laptop|mobile phone/.test(product)) {
        prod = product;
        if (product === "tv") idx = 2;
        if (product === "laptop") idx = 1;
        if (product === "mobile phone") idx = 0;
      } else {
        alert("Wrong product. You can choose only: TV, Laptop, Mobile phone");
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

  getProduct();

  if (prod) {
    if (confirm("Do you want to like your product?") === true) {
      if (products[idx].likes.indexOf(userId) != -1) {
        alert("You have already liked this product!");
        if (confirm("Do you want to remove your like?") === true) {
          products[idx].likes.splice(products[idx].likes.indexOf(userId), 1);
        }
        alert(
          products[idx].likes.length < 1
            ? "No one liked this product yet!"
            : products[idx].likes.length === 1 &&
              products[idx].likes[0] === userId
            ? "At the moment only you liked this product"
            : `This product was liked by ${products[idx].likes}`
        );
      } else {
        products[idx].likes.push(userId);
        alert(`Nice! Product was liked.`);
        if (confirm("Do you want to see who liked this product?") === true) {
          alert(
            `${products[idx].likes
              .map((e) => e[0].toUpperCase() + e.slice(1).toLowerCase())
              .join(", ")} already liked the ${
              products[idx].name[0].toUpperCase() + products[idx].name.slice(1)
            }`
          );
        }
      }
    } else {
      alert("Come again!");
    }
  }
  console.log(products[idx]);
}

likeProduct();
