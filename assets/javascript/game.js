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
    var pictureHTML = document.getElementById("winning-picture");


    //JS Variables
    //=================================================
    //Array that holds all Hangman words
    var hangmanArray = ["london","paris","amsterdam", "berlin", "brussels", "prague", "copenhagen", "istanbul"];

    //variable what randomizes the hangmanArray words
    // var randomWord = hangmanArray[Math.floor(Math.random() * hangmanArray.length)];
    // console.log(randomWord);

    randomWord = "";

    function newWord () {
        randomWord = hangmanArray[Math.floor(Math.random() * hangmanArray.length)];
        console.log(randomWord);
    }

    newWord ();

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
        newWord();
        chosenWord = "";
        spaceWord = "";
    }

    // Variable that takes the randomly generated word and splits it into an array with seperate characters
    var chosenWord = randomWord.split("");

    //variable that holds an array with the same # of "_" as there are characters in var chosenWord
    var spaceWord = [];

    //For loop that adds the same $ of _ to the var spaceWord
    for (var i = 0; i < chosenWord.length; i++) {
        spaceWord[i] = "_";
    }
  
    //Updating the HTML with the needed information before the user presses the key
    guessesRemainingHTML.textContent = maxGuesses;
    currentWordHTML.textContent = spaceWord;
    alreadyGuessedHTML.textContent = letterBank;
    userLossesHTML.textContent = losses;
    userWinsHTML.textContent = wins;

    //When the user presses the keyboard...
    document.onkeyup = function(event) {

        ///The user-directions disappear
        userDirectionsHTML.textContent = "";

        //variable that is subbing for the user key
        var key = event.key;

        //making sure things are working...
        console.log(chosenWord);
        console.log(spaceWord);

        // If the key they press is not in the letterBank array...
        if (letterBank.indexOf(key) === -1) {
            //The key is pushed to the letterBank array
            letterBank.push(key);

            //For loop that takes the user key and checks if it's in the chosenWord array
            for (var i = 0; i < chosenWord.length; i++) {
                //If the user key is in the array...
                if (chosenWord[i] === key) {
                    //the same index value in spaceWord array is replaced with the user key
                    spaceWord[i] = key;
                }
            }
            //maxGuesses reduced by one when user presses key
            maxGuesses--;

            //If there are no _ left in spaceWord...
            if (spaceWord.indexOf("_") === -1) {
                //Add to wins, alert the player, and start resetGame function
                wins++;
                alert("You win!");
                switch (randomWord) {
                    case "london":
                    
                }
                //If guesses = 0, losses is increased
            }   else if (maxGuesses === 0) {
                losses++;
            }
            //If user reuses letter, alert is thrown
           } else {
                alert("you already typed this letter");
           }

           //Updates HTML linked variables
            guessesRemainingHTML.textContent = maxGuesses;
            currentWordHTML.textContent = spaceWord;
            alreadyGuessedHTML.textContent = letterBank;
            userLossesHTML.textContent = losses;
            userWinsHTML.textContent = wins;
    }
