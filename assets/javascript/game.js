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
    var userLossesHTML = document.getElementById("user-losses");
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

    //Variable that holds the max # of guesses
    var maxGuesses = 12;

    //variable that holds the # of user wins
    var wins = 0;

    //Variable holds # of Losses
    var losses = 0;

    //Array that holds the user's letters they've guessed
    var letterBank = [];
    
    //Reset function after they've guessed the word
    function resetGame() {
        maxGuesses = 12;
        letterBank = [];
        randomWord;
    }

    var chosenWord = randomWord.split("");
    var spaceWord = [];
    for (var i = 0; i < chosenWord.length; i++) {
        spaceWord[i] = "_";
    }
  

    guessesRemainingHTML.textContent = maxGuesses;
    currentWordHTML.textContent = spaceWord;
    alreadyGuessedHTML.textContent = letterBank;
    userLossesHTML.textContent = losses;
    userWinsHTML.textContent = wins;

    document.onkeyup = function(event) {
        userDirectionsHTML.textContent = "";

        var key = event.key;
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
            if (spaceWord.indexOf("_") === -1) {
              wins++;
              alert("You win!");
              resetGame();
            } else if (maxGuesses === 0) {
              losses++;
            }
           } else {
            console.log("you already typed this letter");
           }

        //Adds users key to userKeys variable
        guessesRemainingHTML.textContent = maxGuesses;
        currentWordHTML.textContent = spaceWord;
        alreadyGuessedHTML.textContent = letterBank;
        userLossesHTML.textContent = losses;
        userWinsHTML.textContent = wins;
    }
