export class User {

    constructor(_id = '', name = '', phone = '', age = 0, genre = '', dateCreation = ''){
        this._id = _id;
        this.name = name;
        this.phone = phone;
        this.age = age; 
        this.genre = genre;
        this.dateCreation = dateCreation; 
    }

    _id: string;
    name: string;
    phone: string;
    age: number;
    genre: string;
    dateCreation: string;
}
