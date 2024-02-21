// Book Management system

class Book {
  bookDts(author, id, pages) {
    this.author = author;
    this.id = id;
    this.pages = pages;
  }

  getAuthor() {
    console.log(`The Author of this book is  ${this.author}`);
  }

  getId() {
    console.log(`The Id of this book is  ${this.id}`);
  }

  getPages() {
    console.log(`The pages of this book is  ${this.pages}`);
  }
}

class Friction extends Book {
  bookT1(titleone) {
    console.log(`The title of this book is ${titleone}`)
  }
}

class Drama extends Book {
  bookT2(titletwo) {
    console.log(`The title of this book is ${titletwo}`);
  }
}

class Movie extends Book {
  bookT3(titleThree) {
    console.log(`This book is known by ${titleThree}`);
  }
}
console.log("\n The Details of Friction Book");
let book1 = new Friction;
book1.bookDts("Asim Ali", 12453, 258);
book1.getAuthor();
book1.getId();
book1.getPages();

book1.bookT1("JS OOPS");

// Second book

console.log("\n The Details of Drama Book");
let book2 = new Drama;
book2.bookDts("Samir", 345764, 500);
book2.getAuthor();
book2.getId();
book2.getPages();

book2.bookT2("Synchronous and Asynchronous");

// Third book
console.log("\n The Details of Movie Book");
let book3 = new Movie;
book3.bookDts("Ajmal", 25438, 253);
book3.getAuthor();
book3.getId();
book3.getPages();
book3.bookT3("Manthan movie");