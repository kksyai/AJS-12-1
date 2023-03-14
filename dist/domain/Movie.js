"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Chart_1 = __importDefault(require("../domain/Chart"));
var Movie = /** @class */ (function () {
    function Movie(id, price, name, year, countries, tagline, genres, duration) {
        this.id = id;
        this.price = price;
        this.name = name;
        this.year = year;
        this.countries = countries;
        this.tagline = tagline;
        this.genres = genres;
        this.duration = duration;
    }
    return Movie;
}());
exports.default = Movie;
var movie = new Movie(12, 120, 'Titanic', 1985, 'USA', 'love', 'Drama', 8496);
// console.log(movie);
var chart = new Chart_1.default;

//# sourceMappingURL=Movie.js.map
