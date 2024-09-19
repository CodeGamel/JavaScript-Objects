function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

// Define the display method on the prototype
Book.prototype.display = function() {
    return (`\n Title: ${this.title} \n Author: ${this.author} \n Pages: ${this.pages}`);
};

let Library = [];

function addBook(title, author, pages) {
    const newBook = new Book(title, author, pages);
    Library.push(newBook);
    console.log(`Added: ${newBook.display()}`);
}

function searchBooks(query) {
    return Library.filter(book => 
        book.title.toLowerCase().includes(query.toLowerCase()) ||
        book.author.toLowerCase().includes(query.toLowerCase())
    );
}

function displayLibrary() {
    if (Library.length === 0) {
        console.log("No books in the library.");
        return;
    }

    console.log("Library:");
    Library.forEach(book => {
        console.log(book.display());
    });
}

// Displaying Library
displayLibrary();

// Adding books
addBook("The Great Gatsby", "F. Scott Fitzgerald", 220);
addBook("To Kill a Mockingbird", "Harper Lee", 281);

// Example of searching for books
console.log(searchBooks("Harper"));

// -------------------------------------------------------------------------------

function Account(accountNumber, Balance, Owner){
    this.accountNumber = accountNumber;
    this.Balance = 0;
    this.Owner = Owner;
}


Account.prototype.deposit = function(amount){
    if (amount > 0) {
        this.Balance += amount;
        console.log(`Deposited: $${amount}. New balance: $${this.Balance}`);
    } else {
        console.log("Deposit amount must be positive.");
    }
}

Account.prototype.withdraw = function(amount){
    if (amount > 0 && amount <= this.Balance) {
        this.Balance -= amount;
        console.log(`Withdrew: $${amount}. New balance: $${this.Balance}`);
    }
    else if (amount > this.Balance) {
        console.log("Insufficient funds.");
    }
     else {
        console.log("Withdrawal amount must be positive.");
    }
};

function checkBalance() {
    console.log(`Current balance: $${Balance.toFixed(2)}`);
}

Account.prototype.calculateInterest = function (years, annualRate) {
    // Checking Balance
    if (this.Balance <= 0) {
        console.log("Balance must be greater than zero to calculate interest.");
        return;
    }
    
    // Validating the years and rate
    if (years <= 0 || annualRate < 0) {
        console.log("Years must be greater than zero and interest rate must be non-negative.");
        return;
    }

    const principle= this.Balance;
    const r = annualRate; // annual interest rate
    const n = 1; // interest
 

    const amount = principle * Math.pow((1 + r / n), n * years);
    const roundedAmount = Math.ceil(amount);

    console.log(`Amount after ${years} years(s) at an interest rate of ${annualRate * 100}%: $${roundedAmount}`);
    return roundedAmount;
};

// new Account
const myAccount = new Account("123456", "Alice");

// Deposit
myAccount.deposit(1000);

//Withdrawl
myAccount.withdraw(200);

// Calculating compound
myAccount.calculateInterest(5, 0.05)
