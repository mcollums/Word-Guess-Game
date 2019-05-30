//User needs directions to play
//Need a variable that keeps track of wins and displays the number
//Need an array of strings we'll use in the Hangman game.
    //Needs to be random
    //If a letter is pressed and it's in the array, that letter should take the place of the _ placeholder
//Need the number of guesses remaining to start at 12
    //Will decrease everytime a letter key is pressed
//Letters that are pressed will be added to an array called AlreadyGuessed
    //These letters will be displayed to the user

     // document.getElementById("chose").innerHTML = "You picked: " + userGuess;

     //HTML variables
     //================================================
    var userDirectionsHTML = document.getElementById("user-directions");
    var userWinsHTML = document.getElementById("user-wins");
    var currentWordHTML = document.getElementById("current-word"); 
    var guessesRemainingHTML = document.getElementById("guesses-remaining");
    var alreadyGuessedHTML = document.getElementById("already-guessed");
    var answerHTML = document.getElementById("answer");

    //JS Variables
    //=================================================
    //Array that holds all Hangman words
    var hangmanArray = ["cat","frog","horse"];

    //variable what randomizes the hangmanArray words
    var randomWord = hangmanArray[Math.floor(Math.random() * hangmanArray.length)];
    console.log(randomWord);

    //variable that holds the necessary # of blanks for the random word chosen by var randomWord
    // var answerArray = [];

    //Variable that holds the max # of guesses
    var maxGuesses = 12;

    // var spaceWord = [];

    //variable that holds the # of user wins
    var wins = 0;

    //Array that holds the user's letters they've guessed
    var letterBank = [];
    
    //Start function
    function startGame() {
    }
  
    
    //Function that starts the game when a letter key is pressed
    // for (let i = 0; i < chosenWord.length; i++) {
    //     spaceWord.push("_");
    //    }
    document.onkeyup = function(event) {
        userDirectionsHTML.textContent = "";

        var key = event.key;
        var chosenWord = randomWord.split("");
        var spaceWord = [randomWord.split("_")];
        for (var i = 0; i < spaceWord.length; i++) {
            spaceWord[i] = "_";
        }
        console.log(chosenWord);
        console.log(spaceWord);

        if (letterBank.indexOf(key) === -1) {
            letterBank.push(key);
            for (var i = 0; i < chosenWord.length; i++) {
              if (chosenWord[i] === key) {
                spaceWord[i] = key;
              } else {
                console.log("not in the array at this letter");
              }
            }
            maxGuesses--;
            if (spaceWord.indexOf("_") !== -1) {
              console.log("they win");
            } else if (maxGuesses === 0) {
              console.log("they lose");
            }
           } else {
            console.log("you already typed this letter");
           }

        //Adds users key to userKeys variable
        guessesRemainingHTML.textContent = maxGuesses;
        currentWordHTML.textContent = spaceWord;
        alreadyGuessedHTML.textContent = letterBank;
        alreadyGuessedHTML.textContent = letterBank;

    }
