//packages
const chalk = require('chalk');
var readlineSync = require('readline-sync');
//welcome message
console.clear();
console.log(chalk.green.cyanBright('Welcome to Prime and leapyear game!!!'));
console.log(" ");
var userName = readlineSync.question('Please Enter your name: ');
console.log(" ");
console.log(chalk.cyanBright("Welcome ") + chalk.bold.redBright(userName) + chalk.bold.yellow("!"));

var enterAns = readlineSync.question('Which game would you like to play ' + chalk.bold.yellow("leapyear") + ' or ' + chalk.bold.yellow("primenumbers? \n"), '? ');

console.log(" ");


if (enterAns.toUpperCase() == "leapyear".toUpperCase()) {
    var year = readlineSync.question('Please enter a year: ');
    LeapYear(year);
} else if (enterAns.toUpperCase() == "primenumbers".toUpperCase()) {
    var num = readlineSync.question('Please enter a number: ');
    primeNumbers(num);
} else {
    console.log('Sorry entered wrong option!! ');
}

function primeNumbers(num) {
    var fun = 0;
    for (var i = 2; i <= num / 2; i++) {
        if (num % i == 0) {
            console.log('Not a prime number:(');
            fun = 1;
            break;
        }
    }
    if (fun == 0) {
        console.log('Wow!!, prime numer');
    }
}

function LeapYear(year) {
    if ((year % 100 != 0) && (year % 4 == 0) || (year % 400 == 0)) {
        console.log('Yeyy!!, This is a Leap year 💥');
    } else {
        console.log('Oh! not a leap year 😕')
    }
}

console.log('If you want to play again , please go back and click on link again!')
