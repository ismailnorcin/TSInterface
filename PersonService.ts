import { IPersonService } from "./IPersonService";
import { PersonEntity } from "./PersonEntity";
import { PersonData } from "./PersonData";

export class PersonService implements IPersonService{

    private _data = new PersonData().getData();
    
    getPersonById(id: number): PersonEntity {
        
        let item = this._data.filter(person => person.id === id);
        
        return item[0];
    }

    getAllPeople(): PersonEntity[] {
        return this._data;
    }

    insertPerson(person: PersonEntity): number {

        person.id = this._data.length + 1;
        this._data.push(person);
        return person.id;

    }

    savePerson(person: PersonEntity): void {
        this._data.forEach(singlePerson => {
            if (person.id === singlePerson.id)
            {
                singlePerson.age = person.age;
                singlePerson.city = person.city;
                singlePerson.firstName = person.firstName;
                singlePerson.lastName = person.lastName;
            }
        });
    }

    deletePerson(id: number): boolean{
        
        let personOrderNo = 0;

        for (let index in this._data)
        {
            if (this._data[index].id === id)
            {
                personOrderNo = Number(index);
                this._data.splice(personOrderNo, 1);
            }
        }

        return personOrderNo > 0;

    }


}

