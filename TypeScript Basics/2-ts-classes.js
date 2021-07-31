var Employee = /** @class */ (function () {
    function Employee(id, name) {
        this.empCode = id;
        this.empName = name;
    }
    Employee.prototype.displayDetails = function () {
        console.log("Employee code: " + this.empCode);
        console.log("Employee name: " + this.empName);
        //console.log("Employee code: " + this.empCode);
        //console.log("Employee name: " + this.empCode);
    };
    return Employee;
}());
var emp1 = new Employee(1, "emp1");
emp1.displayDetails();
var emp2 = new Employee(2, "emp2");
emp2.displayDetails();
