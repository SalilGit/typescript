var youTubes = /** @class */ (function () {
    function youTubes() {
    }
    youTubes.prototype.getFirstName = function () {
        console.log("My first Name is ", this.firstName);
    };
    youTubes.prototype.getLastName = function () {
        console.log("My lastName is", this.lastName);
    };
    youTubes.prototype.getThirdName = function (name) {
        console.log("Third Name is", name);
    };
    return youTubes;
}());
var result1 = new youTubes();
result1.firstName = "Thapa Technical";
result1.lastName = "And New Data will be written";
result1.getFirstName();
result1.getLastName();
result1.getThirdName("SalilArora");
