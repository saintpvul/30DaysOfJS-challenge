const personAccount = {
  firstName: "Paul",
  lastName: "Shvets",
  incomes: {
    salary: 2000,
    bonuses: 300,
  },
  expenses: {
    apartment: 1300,
    food: 200,
    gas: 70,
  },
  totalIncome: function () {
    return `${Object.keys(this.incomes)} for ${Object.values(
      this.incomes
    ).reduce((s, v) => (s += v), 0)}`;
  },
  totalExpense: function () {
    return `${Object.keys(this.expenses)} for ${Object.values(
      this.expenses
    ).reduce((s, v) => (s += v), 0)}`;
  },
  accountInfo: function () {
    return `${this.lastName}, ${this.firstName}. ${this.accountBalance()}`;
  },
  addIncome: function (s, v) {
    this.incomes[s] = v;
  },
  addExpenses: function (s, v) {
    this.incomes[s] = v;
  },
  accountBalance: function () {
    return `Income is: ${this.totalIncome()}, expenses is: ${this.totalExpense()}. Available funds: ${
      Object.values(this.incomes).reduce((s, v) => (s += v), 0) -
      Object.values(this.expenses).reduce((s, v) => (s += v), 0)
    }`;
  },
};

personAccount.addIncome("stock", 1200);
personAccount.addExpenses("taxes", 400);

console.log(personAccount.firstName);
console.log(personAccount.lastName);

console.log(personAccount.incomes);
console.log(personAccount.expenses);
console.log(personAccount.accountBalance());
console.log(personAccount.totalIncome());
console.log(personAccount.totalExpense());

console.log(personAccount.accountInfo());
