"use strict";
const {fullBalance, pin}= require("./account.js");
const {balance, takeOutMoney, addMoney, correctPin}= require("./atm");
const prompt = require("prompt-sync")
//! Don't forget to add "console": "integratedTerminal" to .vscode/launch.json after creating launch configuration
//TODO: Import necessary functions from atm.js
//TODO: Utilize prompt-sync so we can get user input for various functions


function accessATM() {
  let pinAccess = console.log(require('prompt-sync')()('Enter Pin '))
    if (correctPin === pinAccess){
    mainMenu()}
    else{
      alert("wrong pin") + pinAccess

  }
  //TODO: Prompt users for their pin
  //Use ATM.js validatePin function to verify pin matches
  //Proceed to main menu ONLY if they match
}
//TODO: Call accessATM function
console.log(accessATM())
function mainMenu() {
  let arr =  ["1.Current Balance ","2.Make A Deposit","3.Make a Withdrawal","4.Restart","Quit"]
        let finalOption=""
        for (let i = 0; i< arr.length; i++){
        finalOption += arr[i] + "\n";
        }
  let questionarray =console.log(require('prompt-sync')()( "what would you like to do?"+ " "+finalOption))      
        switch (questionarray) {
          case "1","1.Current Balance","Current Balance":
            balance()
            break;
          case "2","2.Make A Deposit","Make A Deposit":
            addMoney()
            break;
          case "3","3.Make a Withdrawal","Make a Withdrawal":
            takeOutMoney()
            break;
          case "4","4.restart","restart":
            mainMenu()
            break;
          case "quit":
            accessATM()
          default:
            return mainMenu(); // ask again
        }
  //TODO: Set up a main menu.  Prompt users for ATM selection to do the following:
  //! Remember - we should keep prompting the user for options until they quit!

}
module.export = { mainMenu,accessATM
};
