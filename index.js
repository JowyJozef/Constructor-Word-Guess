var Words = require('./Word');

// Load the NPM Package inquirer - to prompt user to input letter 
var inquirer = require("inquirer");
//Display colorful message using chalk                          
const chalk = require('chalk');

// Guesses left
var guessesLeft = 10;

//Array for collecting letters guessed correct or in-correct 
var incorrectLetters = [];
var correctLetters = [];
var userLetterGuesses = []; 

//List of words 
var wordsList = ["Florida","Tennessee", "New York", "Puerto Rico", "Dominican Republic" ]; 

//Pick random words from the list of words 
var randomNum = Math.floor(Math.random()* wordsList.length); 
var randomWord = wordsList[randomNum]; 

// console.log("Random number: "+ randomNum); 
console.log("Random word: "+ randomWord); 

function guessWord() { 
    inquirer
    .prompt([
    // Here we create a basic text prompt.
    {
        type: "input",
        message: chalk.red.bold("Guess a letter?"),
        name: "letter"
    }])
    .then(function (answer) {

    // console.log(answer); 
    
    // console.log(chalk.green.bold("You guessed: " + answer.letter.toUpperCase()));
    

    
    //LETTERS IS ALREADY GUESSED 
    if (userLetterGuesses.includes(answer.letter) ){
        console.log(chalk.brightBlue.bold("You already guessed that letter ... ")); 
    }
    else {
        userLetterGuesses.push(answer.letter);
    }
    console.log("ALL GUESSED LETTERS "+ userLetterGuesses);
    //call the check function from letter 

        //Decrease the no. of guesses 
        guessesLeft--; 
        console.log(chalk.bold(guessesLeft + " Guesses remaining!"));
        // Print letters guessed already
        console.log("Letters Guessed: " + incorrectLetters.join(" ") + "\n");

        if (guessesLeft > 0) {
            // Call function again till word is complete - recursive function 
            guessWord(); 

        } else {
            console.log(chalk.red.bold("You lost! Try again later!\n"));

            //Restart a NEw Game 
            playAgain();
        }
    });
}

function playAgain() {
    inquirer
    .prompt([
    // Here we create a basic text prompt.
    {
        type: "confirm",
        message: chalk.red.bold("Do you wish to play again?"),
        name: "restartGame",
        default: true 
    }])
    .then(function (answer) {
        // console.log(answer.restartGame); 
        if(answer.restartGame){
            guessWord(); 
        }
        else {
            console.log(chalk.brightRed.bold("Goodbye ... See you again! " )); 
        }
    });

}
//MAIN PROCESS 
guessWord(); 