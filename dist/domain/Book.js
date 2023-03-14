"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Book = /** @class */ (function () {
    function Book(id, name, author, price, pages) {
        this.id = id;
        this.name = name;
        this.author = author;
        this.price = price;
        this.pages = pages;
    }
    return Book;
}());
exports.default = Book;
var book = new Book(12, 'ivo', 'Tolstoy', 234, 1045);
console.log(book);
//# sourceMappingURL=Book.js.map