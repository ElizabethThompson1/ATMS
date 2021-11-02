"use strict";
const {balance, takeOutMoney, addMoney, correctPin}= require("./atm");
const {pinFunction, balanceFunction} = require("./account");
const prompt = require("prompt-sync");
//! Don't forget to add "console": "integratedTerminal" to .vscode/launch.json after creating launch configuration
//TODO: Import necessary functions from atm.js
//TODO: Utilize prompt-sync so we can get user input for various functions
//* Refer to Intro to Node.js PowerPoint for prompt-sync installation instructions
let pinAccess = prompt("what is your pin?")
function accessATM(pin) {
    if (correctPin === pin){
    mainMenu()}
    else{
      alert("wrong pin") + pinAccess

  }
  //TODO: Prompt users for their pin
  //Use ATM.js validatePin function to verify pin matches
  //Proceed to main menu ONLY if they match
}
console.log (accessATM(pin))
//TODO: Call accessATM function

function mainMenu() {
  let arr =  ["1.Current Balance ","2.Make A Deposit","3.Make a Withdrawal","4.Restart","Quit"]
        let finalOption=""
        for (let i = 0; i< arr.length; i++){
        finalOption += arr[i] + "\n";
        }
  let questionarray =prompt("what would you like to do? 1,2,3,4,restart, or quit?"+ finalOption)
        switch (questionarray) {
          case "1","1.Current Balance","Current Balance":
            balance
            break;
          case "2","2.Make A Deposit","Make A Deposit":
            addMoney
            break;
          case "3","3.Make a Withdrawal","Make a Withdrawal":
            takeOutMoney
            break;
          case "4","4.restart","restart":
            mainMenu()
            break;
          case "quit":
            accessATM
          default:
            return mainMenu(); // ask again
        }
  //TODO: Set up a main menu.  Prompt users for ATM selection to do the following:
  //! Remember - we should keep prompting the user for options until they quit!

}
module.export = {
  mainMenu:mainMenu,
  accessATM: accessATM,
};
