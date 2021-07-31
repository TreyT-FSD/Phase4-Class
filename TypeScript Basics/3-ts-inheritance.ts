class Person{
    name:string;
    age:number;

    constructor(name:string, age:number) {
        this.name=name;
        this.age=age;
    }

    displayDetails(){
        console.log("name: " + this.name);
        console.log("age: " + this.age);
    }
}

class Customer extends Person{
    amount:number;
    type:string;

    constructor(name:string, age:number, amount:number, type:string){
        super(name, age);
        this.amount=amount;
        this.type=type;
    }
    displayDetails(){
        super.displayDetails();
        console.log("amount: " + this.amount);
        console.log("type: " + this.type);
    }

}

var customer1 = new Customer("tim",23,2000,"silver");
customer1.displayDetails();