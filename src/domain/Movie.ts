import Buyable from '../domain/Buyable';
import Cart from './Cart';

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
    {}
}

const movie = new Movie(12, 120, 'Titanic', 1985, 'USA','love', 'Drama', 8496);
// console.log(movie);
