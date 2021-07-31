class aPerson{
    name:string;
    age:number;
    static country: string = "England"; //exmple 1
    static country2: string; //example 2

    constructor(name:string, age:number) {
        this.name=name;
        this.age=age;
        aPerson.country2="country2-England" //example 2, assign during constructor.
    }

    displayDetails(){
        console.log("name: " + this.name);
        console.log("age: " + this.age);
        console.log("country: " + aPerson.country); //cant reference country since it static for all aPerson objs. must reference as a static.
    }
}

class aCustomer extends aPerson{
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

var customer1 = new aCustomer("tim",23,2000,"silver");
customer1.displayDetails();