"use strict";
//! START HERE! Then atm.js, then index.js
const {balance, takeOutMoney, addMoney, correctPin}= require("./atm");
const {mainMenu, accessATM, } = require("./index.js")
const prompt = require("prompt-sync")



//! Remember to run npm init to create your Node application!

//TODO: Create variables for account balance & account pin

function atmPin() {
    let accountpin = 1123
    return accountpin
}

let accountBalance ="10,ooo"
function atmBalance (){
   
    console.log(accountBalance)
}

//Export these variables

module.export ={
    pinFunction: atmPin(),
    balanceFunction: atmBalance(),
};

  