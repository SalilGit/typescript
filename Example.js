var Users = /** @class */ (function () {
    function Users() {
    }
    Users.prototype.getData = function (a) {
        return a;
    };
    Users.prototype.setData = function (b) {
        return b;
    };
    return Users;
}());
var User1 = new Users();
var resultData = User1.getData("Salil");
var resultData2 = User1.setData("Arora");
console.log(resultData);
console.log(resultData2);
