var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var aPerson = /** @class */ (function () {
    function aPerson(name, age) {
        this.name = name;
        this.age = age;
    }
    aPerson.prototype.displayDetails = function () {
        console.log("name: " + this.name);
        console.log("age: " + this.age);
        console.log("country: " + aPerson.country); //cant reference country since it static for all aPerson objs. must reference as a static.
    };
    aPerson.country = "England";
    return aPerson;
}());
var aCustomer = /** @class */ (function (_super) {
    __extends(aCustomer, _super);
    function aCustomer(name, age, amount, type) {
        var _this = _super.call(this, name, age) || this;
        _this.amount = amount;
        _this.type = type;
        return _this;
    }
    aCustomer.prototype.displayDetails = function () {
        _super.prototype.displayDetails.call(this);
        console.log("amount: " + this.amount);
        console.log("type: " + this.type);
    };
    return aCustomer;
}(aPerson));
var customer1 = new aCustomer("tim", 23, 2000, "silver");
customer1.displayDetails();
