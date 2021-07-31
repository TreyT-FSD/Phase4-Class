
abstract class BankAccount{
    abstract deposit():void;
    abstract withdraw():void;
    abstract balance():void;
}

//can use the quick fix prompt to generate the 
class SavingsAccount extends BankAccount{

    deposit(): void {
        console.log('deposit in saving account');
        
    }
    withdraw(): void {
        console.log('withdraw from saving account');
    }
    balance(): void {
        console.log('balance of saving account');
    }

}

//can use the quick fix prompt to generate the 
class CurrentAccount extends BankAccount{

    deposit(): void {
        console.log('deposit in current account');
        
    }
    withdraw(): void {
        console.log('withdraw from current account');
    }
    balance(): void {
        console.log('balance of current account');
    }

}

var mySavingAcct = new SavingsAccount();
mySavingAcct.balance();
mySavingAcct.deposit();
mySavingAcct.withdraw();
