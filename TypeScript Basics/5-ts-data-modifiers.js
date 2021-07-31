//Available access modifiers
/*

    default is public - accessible anywhere
    private - restricted to in this class only. cant get to it in child class
    protected - available to child class, not outside of class


*/
var Employee4 = /** @class */ (function () {
    function Employee4(id, name, age) {
        this.empCode = id;
        this.empName = name;
    }
    Employee4.prototype.displayDetails = function () {
        console.log("Employee code: " + this.empCode);
        console.log("Employee name: " + this.empName);
        console.log("Employee name: " + this.age);
        //console.log("Employee code: " + this.empCode);
        //console.log("Employee name: " + this.empCode);
    };
    return Employee4;
}());
var emp4 = new Employee4(1, "emp1", 22);
//class members accessible outside of the class
console.log(emp1.empCode);
console.log(emp1.empName);
var emp5 = new Employee4(2, "emp2", 32);
emp2.displayDetails();
