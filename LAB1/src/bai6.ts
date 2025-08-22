export class Book{
    title: string;
    author: string;
    year: number;

    constructor(title: string, author: string, year: number){
        this.author = author;
        this.title = title;
         this.year = year;
    }

    displayBookInfo(): void{
        console.log(`Author: ${this.author} \n Title: ${this.title} \n Year: ${this.year}`)
    }
}