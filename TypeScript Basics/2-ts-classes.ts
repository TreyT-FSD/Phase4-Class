
class Employee{
    empCode: number;
    empName: string;

    constructor(id:number, name:string) {
        this.empCode=id;
        this.empName=name;
    }

    displayDetails(){
        console.log(`Employee code: ${this.empCode}`);
        console.log(`Employee name: ${this.empName}`);
        //console.log("Employee code: " + this.empCode);
        //console.log("Employee name: " + this.empCode);
    }
}

var emp1 = new Employee(1,"emp1");
emp1.displayDetails();

var emp2 = new Employee(2,"emp2");
emp2.displayDetails();