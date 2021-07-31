//Available access modifiers
/*

    default is public - accessible anywhere
    private - restricted to in this class only. cant get to it in child class
    protected - available to child class, not outside of parent/child class


*/

class Employee4{
    empCode: number;
    private empName: string;
    protected age: number;

    constructor(id:number, name:string, age:number) {
        this.empCode=id;
        this.empName=name;
    }

    displayDetails(){
        console.log(`Employee code: ${this.empCode}`);
        console.log(`Employee name: ${this.empName}`);
        console.log(`Employee name: ${this.age}`);

        //console.log("Employee code: " + this.empCode);
        //console.log("Employee name: " + this.empCode);
    }
}

var emp4 = new Employee4(1,"emp1",22);
//class members accessible outside of the class
console.log(emp4.empCode);
//console.log(emp4.empName); //compile error
//console.log(emp4.age); //compile error

var emp5 = new Employee4(2,"emp2",32);
emp2.displayDetails();