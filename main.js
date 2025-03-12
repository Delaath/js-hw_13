// Завдання 1
let user = {
    name: "Alex",
    age: 25,
    hobby: "reading",
    premium: true
};

user = { ...user, mood: "happy", hobby: "skydiving", premium: false };

for (let [key, value] of Object.entries(user)) {
    console.log(`${key}: ${value}`);
}

// Завдання 2
const countProps = obj => Object.keys(obj).length;

console.log(countProps(user));

// Завдання 3
const findBestEmployee = employees => {
    let maxTasks = 0;
    let bestEmployee = "";

    for (const [name, tasks] of Object.entries(employees)) {
        if (tasks > maxTasks) {
            maxTasks = tasks;
            bestEmployee = name;
        }
    }

    return bestEmployee;
};

let employees = { John: 10, Sarah: 15, Tom: 8 };
console.log(findBestEmployee(employees));

// Завдання 4
const countTotalSalary = employees => 
    Object.values(employees).reduce((total, salary) => total + salary, 0);

let salaries = { John: 1000, Sarah: 1200, Tom: 900 };
console.log(countTotalSalary(salaries));

// Завдання 5
const getAllPropValues = (arr, prop) => arr.map(obj => obj[prop]).filter(value => value !== undefined);

let products = [
    { name: "Apple", price: 30, quantity: 3 },
    { name: "Banana", price: 20, quantity: 5 },
    { name: "Orange", price: 25, quantity: 2 }
];

console.log(getAllPropValues(products, "name"));

// Завдання 6
const calculateTotalPrice = (allProducts, productName) => {
    const product = allProducts.find(({ name }) => name === productName);
    return product ? product.price * product.quantity : 0;
};

console.log(calculateTotalPrice(products, "Apple"));

// Завдання 7 — керування особистим кабінетом інтернет-банку
const Transaction = {
    DEPOSIT: "deposit",
    WITHDRAW: "withdraw"
};

const account = {
    balance: 0,
    transactions: [],

    createTransaction(amount, type) {
        return { id: this.transactions.length + 1, amount, type };
    },

    deposit(amount) {
        const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
        this.transactions.push(transaction);
        this.balance += amount;
        console.log(`Поповнення на ${amount} грн. Баланс: ${this.balance} грн`);
    },

    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Недостатньо коштів!");
            return;
        }

        const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
        this.transactions.push(transaction);
        this.balance -= amount;
        console.log(`Зняття ${amount} грн. Баланс: ${this.balance} грн`);
    },

    getBalance() {
        console.log(`Поточний баланс: ${this.balance} грн`);
    },

    getTransactionDetails(id) {
        return this.transactions.find(({ id: transactionId }) => transactionId === id) || "Транзакцію не знайдено";
    },

    getTransactionTotal(type) {
        return this.transactions
            .filter(({ type: transactionType }) => transactionType === type)
            .reduce((total, { amount }) => total + amount, 0);
    }
};

account.deposit(500);
account.withdraw(200);
account.getBalance();
console.log(account.getTransactionDetails(1));
console.log("Загальна сума депозитів:", account.getTransactionTotal(Transaction.DEPOSIT));
console.log("Загальна сума зняття:", account.getTransactionTotal(Transaction.WITHDRAW));
