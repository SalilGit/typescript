var Price = /** @class */ (function () {
    function Price() {
        this.name = "";
    }
    Price.prototype.setData = function (names) {
        this.name = "Salil Arora";
    };
    Price.prototype.displayData = function () {
        console.log("display", this.name);
    };
    return Price;
}());
var totalPrice = new Price();
var result = totalPrice.setData();
totalPrice.displayData();
