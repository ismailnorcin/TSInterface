"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonData = void 0;
var PersonEntity_1 = require("./PersonEntity");
var PersonData = /** @class */ (function () {
    function PersonData() {
        this._people = Array(new PersonEntity_1.PersonEntity(1, "Jennie", "Nichols", "Avesta", 10), new PersonEntity_1.PersonEntity(2, "Ally", "Aagaard", "Enköping", 15), new PersonEntity_1.PersonEntity(3, "Stephanie", "Bader", "Fagersta", 20), new PersonEntity_1.PersonEntity(4, "Christine", "Benedyk", "Falun", 25), new PersonEntity_1.PersonEntity(5, "Jace", "Calloway", "Hudiksvall", 40), new PersonEntity_1.PersonEntity(6, "Bentley", "Daehn", "Homer", 54), new PersonEntity_1.PersonEntity(7, "Dominic", "Earney", "El Dorado", 18), new PersonEntity_1.PersonEntity(8, "Brian", "Ford", "Anaheim", 20), new PersonEntity_1.PersonEntity(9, "Stephanie", "Galetti", "Novato", 15), new PersonEntity_1.PersonEntity(10, "Knox", "Griswold", "Sacramento", 9), new PersonEntity_1.PersonEntity(11, "Dominic", "Hendricks", "Santa Rosa", 35), new PersonEntity_1.PersonEntity(12, "Braydon", "Jahns", "Aurora", 38), new PersonEntity_1.PersonEntity(13, "Casey", "Kalso", "Bridgeport", 55), new PersonEntity_1.PersonEntity(14, "Brooklyn", "Lanferman", "Westport", 60), new PersonEntity_1.PersonEntity(15, "Nicholas", "Marsh", "Orlando", 27));
    }
    PersonData.prototype.getData = function () {
        return this._people;
    };
    return PersonData;
}());
exports.PersonData = PersonData;
