"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PersonService_1 = require("./PersonService");
var service = new PersonService_1.PersonService();
/* Get All People
console.log(service.getAllPeople());
*/
/* Get Person By Id
console.log(service.getPersonById(5));
*/
/* Insert Person
console.log(service.getAllPeople());
let person = new PersonEntity(0, "İsmail", "Norçin", "İstanbul", 10);
service.insertPerson(person);
console.log(service.getAllPeople());
*/
/* Update Person
let id = 10;
let person = service.getPersonById(id);
person.age = 100;
person.city = "New City";
person.firstName = "New Name";
person.lastName = "New Lastname";

service.savePerson(person);
console.log(person);
console.log(service.getAllPeople());
*/
/* Delete Person
let order = [1, 3, 5, 7, 9 , 11, 13, 15];
let people = service.getAllPeople();
people.forEach(person => {
    service.deletePerson(person.id);
});
console.log(service.getAllPeople());
*/ 
