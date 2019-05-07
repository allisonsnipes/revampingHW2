"use strict";

//document ready function
$(document).ready(function() {
  $(".showGame").hide(); //hides the game until start
  $(".wordGuess").hide();
  $(".writeUp").hide();
  start(); //starts the game
  reset(); //resets the game
  quit(); //exit game on quit
});

//starting defining variables and starting points
let currentQuestion = 0, //current question number
  score = 0, //begin score @ 0
  alphaB = [ //creates alphabet
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o',
    'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
    guesses = [ ], //stored guesses of users
    guess = 10, //stores guess count limit 10
    words, //current word
    wins = 0, //start with 0 wins counter
    losses = 0, //start 0 losses counter
    lives = 10, //start with specific #of lives
    counter = 0, //counter increment
    spacesInWord; //spaces in actual word

//beginning base of code--- set all elements up with a purpose...

//creating the alphaB buttons ul list
let buttons = function() {
  myButtons = document.getElementById("buttons");
  letters = document.createElement("ul");

  for (let i = 0; i < alphaB.length; i++) {
    letters.id = "alphaB";
    list.document.createElement("li");
    list.id = "letters";
    list.innerHTML = alphaB[i];
    check();
    myButtons.appendChild(letters);
    letters.appendChild(list);
  }

//DOM display for words to guess connected to the ul element
result = function() {
  wordHolder = document.getElementById("hold");
    correctChoice = document.createElement("ul");

    for (let i = 0; i < words.length; i++) {
      correctChoice.setAttribute("id", "my-word");
      guess = document.createElement("li");
      guess.setAttribute("class", "guess");
      if(word[i] === "-") {
        guess.innerHTML = "-";
        spacesInWord = 1;
      } else {
        guess.innerHTML = "_";
      }

      guesses.push(guess)//makes guesses populate
      wordHolder.appendChild(correct);
      correct.appendChild(guess);
    }
}

//creating the number lives and display that number
let showingLives = document.getElementsById("lives");

//displaying messages depending on # of lives
comments = function() {
  showingLives.innerHTML = lives + "left";
  if (lives < 1) {
    showingLives.innerHTML = "Lulz, you lost. Game over";
  }
  for (let i = 0; i < guesses.length; i++) {
    if (counter + space === guesses.length) {
      showingLives.innerHTML = "Congrats you win";
    }
  }
}

//onclick function for lives decrementing
check = function() {
  list.onclick = function() {
    let guess = (this.innerHTML);
    this.setAttribute("class", "active");
    this.onclick = null;
    for (let i = 0; i < word.length; i++) {
      if (word[i] === guess) {
        guesses[i].innerHTML = guess;
        counter += 1;
      }
    }
    var k = (word.indexOf(guess));
    if (k === -1) {
      lives -= 1;
      comments();
    } else {
      comments();
    }
  }
}

//important button functions
//function to start game
function start() {
  $(".startGame").on("click", function(event) {
    event.preventDefault();
   $(".showGame").show();
    wordsToGuess();
  });
}

//function to reset the game
$(".resetGame").on("click", function(event) {
  $(".showGame").hide();
})

//function to quit game
function quit() {
  $(".quitGame").on("click", function(event) {
    event.preventDefault();
    window.location.href = "https://github.com/allisonsnipes";
  });
}

// ["vault7", "davinchi", "trojan", "fatVirus", "polymorphicVirus", "macroVirus","fileInfector", "browserHijacker", "directActionVirus","bootSectorVirus"]