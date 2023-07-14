import { PersonEntity } from "./PersonEntity";

export interface IPersonService{
    getPersonById(id: number): PersonEntity;
    getAllPeople(): PersonEntity[];
    insertPerson(person: PersonEntity): number;
    savePerson(person: PersonEntity): void;
    deletePerson(id: number): void;
}