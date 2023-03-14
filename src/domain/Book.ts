import Buyable from '../domain/Buyable';

export default class Book implements Buyable {
    constructor (    
        readonly id: number,
        readonly name: string,
        readonly author: string,
        readonly price: number,
        readonly pages: number
    )
    {}
}

const book = new Book(12, 'ivo', 'Tolstoy', 234, 1045);
console.log(book);
