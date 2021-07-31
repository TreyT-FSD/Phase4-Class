//basic variable syntax
console.log("variable syntax");


var username: string = "trey";
var userAge: number = 24;
var isActive: boolean = true;

console.log(username);
console.log(userAge);
console.log(isActive);

var firstName : string = "tim";
var lastName : string = "hortons";

//string output
console.log("");
console.log("string output");
console.log(firstName + " " + lastName); //one way
console.log(`${firstName} ${lastName}`); //another way


var empId:number = 101;
var empName:string = "timmy h";

//tuple
console.log("");
console.log("tuple demo");
var employee:[number, string] = [102,"star buck"];
console.log(employee);

var user:[number, string, string, boolean];
user = [1,"firstname","lastname",true];
console.log(user);

//enums 
//if there is an error here ignore the error, 
//TS sees the duplicate name in the generated js 
//file when they are opened at the same time
console.log("");
console.log("enum demo");
enum Directions{
    North,
    South,
    East,
    West
}

function getDirections(direction: number){
    if(direction == 0){
        return "North India";
    }
    return Directions[direction];
}

console.log("getDirections East is: " + getDirections(Directions.East));

var aDirection:Directions = Directions.West;
console.log("var aDirection is set to: " + aDirection);

console.log("getDirections North is: " + getDirections(Directions.North));

console.log("Directions[North] is: " + Directions["North"]);
console.log("Directions[0] is: " + Directions[0]);


//Unions (not always a good practice)
//allows you to use more than one data type in a variable
console.log("");
console.log("Union demo");
var empCode:(string | number);
empCode = 201;
console.log(empCode);
empCode = "301";
console.log(empCode);

//function union
function display(value: number | string){
    if(typeof value === "number"){
        console.log("value is a number");
        
    }
    else if(typeof value === "string"){
        console.log("value is a string");
    }
    else{
        console.log("value is not supported");
    }
}

display(123);
display("test");
//display(true);  //this generated a compile time error


console.log("");
console.log("the any type. basically a js variable");
//working with any, basically using vars in TS like they are used in JS
var something:any = "Hello World";
console.log(something);
something=123;
console.log(something);
something=true;
console.log(something);
something=employee;
console.log(something);



