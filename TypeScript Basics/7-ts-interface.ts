interface IBankAccount {
    depost():void;
    balance():void;
    printMessage: () => void;
}

class impBankAccount implements IBankAccount{
    
    depost(): void {
        console.log("This is deposit method");
        
    }
    balance(): void {
        console.log("This is balance method");
    }

    //arrow functions
    //printMessage: () => {};
    
}

var myB  = new impBankAccount();