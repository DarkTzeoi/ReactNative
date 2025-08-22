"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
class Book {
    constructor(title, author, year) {
        this.author = author;
        this.title = title;
        this.year = year;
    }
    displayBookInfo() {
        console.log(`Author: ${this.author} \n Title: ${this.title} \n Year: ${this.year}`);
    }
}
exports.Book = Book;
