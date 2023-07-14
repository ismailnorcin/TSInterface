"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonService = void 0;
var PersonData_1 = require("./PersonData");
var PersonService = /** @class */ (function () {
    function PersonService() {
        this._data = new PersonData_1.PersonData().getData();
    }
    PersonService.prototype.getPersonById = function (id) {
        var item = this._data.filter(function (person) { return person.id === id; });
        return item[0];
    };
    PersonService.prototype.getAllPeople = function () {
        return this._data;
    };
    PersonService.prototype.insertPerson = function (person) {
        person.id = this._data.length + 1;
        this._data.push(person);
        return person.id;
    };
    PersonService.prototype.savePerson = function (person) {
        this._data.forEach(function (singlePerson) {
            if (person.id === singlePerson.id) {
                singlePerson.age = person.age;
                singlePerson.city = person.city;
                singlePerson.firstName = person.firstName;
                singlePerson.lastName = person.lastName;
            }
        });
    };
    PersonService.prototype.deletePerson = function (id) {
        var personOrderNo = 0;
        for (var index in this._data) {
            if (this._data[index].id === id) {
                personOrderNo = Number(index);
                this._data.splice(personOrderNo, 1);
            }
        }
        return personOrderNo > 0;
    };
    return PersonService;
}());
exports.PersonService = PersonService;
