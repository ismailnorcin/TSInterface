"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonEntity = void 0;
var PersonEntity = /** @class */ (function () {
    function PersonEntity(id, firstName, lastName, city, age) {
        this._id = id || 0;
        this._firstName = firstName || "";
        this._lastName = lastName || "";
        this._city = city || "";
        this._age = age || 0;
    }
    Object.defineProperty(PersonEntity.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (val) {
            this._id = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PersonEntity.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (val) {
            this._firstName = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PersonEntity.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (val) {
            this._lastName = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PersonEntity.prototype, "city", {
        get: function () {
            return this._city;
        },
        set: function (val) {
            this._city = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PersonEntity.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (val) {
            this._age = val;
        },
        enumerable: false,
        configurable: true
    });
    return PersonEntity;
}());
exports.PersonEntity = PersonEntity;
