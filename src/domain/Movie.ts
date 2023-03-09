import Buyable from '../domain/Buyable';
import Cart from '../domain/Chart';

export default class Movie implements Buyable {
    constructor (    
        readonly id: number,
        readonly price: number,
        readonly name: string,
        readonly year: number,
        readonly countries: string,
        readonly tagline: string,
        readonly genres: string,
        readonly duration: number,
    )
    {
        this.id = id;
        this.price = price;
        this.name = name;
        this.year = year;
        this.countries = countries;
        this.tagline = tagline;
        this.genres = genres;
        this.duration = duration
    }
}

const movie = new Movie(12, 120, 'Titanic', 1985, 'USA','love', 'Drama', 8496);
// console.log(movie);

const chart = new Cart;
chart.add(movie);
console.log(chart);