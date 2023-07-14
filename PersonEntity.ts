export class PersonEntity {
    
    private _id: number;
    private _firstName: string;
    private _lastName: string;
    private _city: string;
    private _age: number;

    constructor(
        id?: number, 
        firstName?: string,
        lastName?: string,
        city?: string,
        age?: number
        ){

        this._id = id || 0;
        this._firstName = firstName || "";
        this._lastName = lastName || "";
        this._city = city || "";
        this._age = age || 0;

    }


    set id(val: number){
        this._id = val;
    }

    set firstName(val: string){
        this._firstName = val;
    }

    set lastName(val: string){
        this._lastName = val;
    }

    set city(val: string){
        this._city = val;
    }

    set age(val: number){
        this._age = val;
    }

    get id(){
        return this._id;
    }

    get firstName(){
        return this._firstName;
    }

    get lastName(){
        return this._lastName;
    }

    get city(){
        return this._city;
    }

    get age(){
        return this._age;
    }
}


