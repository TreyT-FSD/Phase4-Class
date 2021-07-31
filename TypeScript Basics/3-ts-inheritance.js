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
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.displayDetails = function () {
        console.log("name: " + this.name);
        console.log("age: " + this.age);
    };
    return Person;
}());
var Customer = /** @class */ (function (_super) {
    __extends(Customer, _super);
    function Customer(name, age, amount, type) {
        var _this = _super.call(this, name, age) || this;
        _this.amount = amount;
        _this.type = type;
        return _this;
    }
    Customer.prototype.displayDetails = function () {
        _super.prototype.displayDetails.call(this);
        console.log("amount: " + this.amount);
        console.log("type: " + this.type);
    };
    return Customer;
}(Person));
var customer1 = new Customer("tim", 23, 2000, "silver");
customer1.displayDetails();
