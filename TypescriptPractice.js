var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.getName = function (name) {
        this.name = name;
        return this.name;
    };
    return Person;
}());
var role = new Person();
console.log(role.getName("Salil Arora"));
