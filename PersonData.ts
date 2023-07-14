import { PersonEntity } from "./PersonEntity";

export class PersonData{

    private _people: PersonEntity[];

    constructor(){
        this._people = Array<PersonEntity>(
            new PersonEntity(1, "Jennie", "Nichols", "Avesta", 10),
            new PersonEntity(2, "Ally", "Aagaard", "Enköping", 15),
            new PersonEntity(3, "Stephanie", "Bader", "Fagersta", 20),
            new PersonEntity(4, "Christine", "Benedyk", "Falun", 25),
            new PersonEntity(5, "Jace", "Calloway", "Hudiksvall", 40),
            new PersonEntity(6, "Bentley", "Daehn", "Homer", 54),
            new PersonEntity(7, "Dominic", "Earney", "El Dorado", 18),
            new PersonEntity(8, "Brian", "Ford", "Anaheim", 20),
            new PersonEntity(9, "Stephanie", "Galetti", "Novato", 15),
            new PersonEntity(10, "Knox", "Griswold", "Sacramento", 9),
            new PersonEntity(11, "Dominic", "Hendricks", "Santa Rosa", 35),
            new PersonEntity(12, "Braydon", "Jahns", "Aurora", 38),
            new PersonEntity(13, "Casey", "Kalso", "Bridgeport", 55),
            new PersonEntity(14, "Brooklyn", "Lanferman", "Westport", 60),
            new PersonEntity(15, "Nicholas", "Marsh", "Orlando", 27),
        );
    }

    getData (): PersonEntity[]{
        return this._people;
    }

}

