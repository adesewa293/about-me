"use strict";

function showPrompt() {
  let user;
  let petNum;
  let myLuckyNumber;
  let myCodingDays;
  let gamePrompt;
  let enjoyMyquiz;
  let myGuessNumber;
  let totalScore = 0;

  alert("Hi, I'm Adesewa, welcome to my site");
  function userName() {
    user = prompt("what is your name?");
    alert("welcome to my page " + user + "!");
    gamePrompt = prompt("do you want to play a guessing game? you can answer with yes, no,y or n");
    
    if (
      gamePrompt.toLowerCase() === "yes" ||
      gamePrompt.toLowerCase() === "y"
      ) {
        totalScore++;
        alert("Okay then, let us play " + user);
    } else if (
      gamePrompt.toLowerCase() == "no" ||
      gamePrompt.toLowerCase() === "n"
    ) {
      alert(
        "You have to seee my prompts. lets play pleaseeeeeeee try again*inserts cute eyes*"
      );

      
    }
  }
  userName();

  function numOfPets() {
    petNum = prompt("Do you think i own any pets " + user + "?");
    

    if (petNum.toLowerCase() === "yes" || petNum.toLowerCase() === "y") {
      alert("uh oh, i actually have zero");
    } else if (petNum.toLowerCase() === "no" || petNum.toLowerCase() === "n") {
      alert("that is correct, you do know me!");
      totalScore++;
    }
  }
  numOfPets();

  function luckyNumber() {
    myLuckyNumber = prompt("Do you think i believe in lucky numbers?");
    
    if (
      myLuckyNumber.toLowerCase() === "yes" ||
      myLuckyNumber.toLowerCase() === "y"
    ) {
      alert("you are right! I do!");
      totalScore++;
    } else if (
      myLuckyNumber.toLowerCase() === "no" ||
      myLuckyNumber.toLowerCase() === "n"
    ) {
      alert("lucky numbers are unique to each person, mine is 7 tho");
    }
  }

  luckyNumber();

  function codingDays() {
    myCodingDays = prompt("do you think i code everyday a week?");
    
    if (
      myCodingDays.toLowerCase() === "yes" ||
      myCodingDays.toLowerCase() === "y"
    ) {
      alert("you must know me so well, talk is cheap, just show me the code.");
      totalScore++;
    } else if (
      myCodingDays.toLowerCase() === "no" ||
      myCodingDays.toLowerCase() === "n"
    ) {
      alert("I wish. I actually do code everyday.");
    }
  }
  codingDays();

  function enjoyQuiz() {
    enjoyMyquiz = prompt("Did you enjoy my quiz?");
    if (
      enjoyMyquiz.toLowerCase() === "yes" ||
      enjoyMyquiz.toLowerCase() === "y"
    ) {
      alert("Thanks, i enjoyed creating it too");
      totalScore++;
    } else if (
      enjoyMyquiz.toLowerCase() === "no" ||
      enjoyMyquiz.toLowerCase() === "n"
    ) {
      alert("I will get creative next time");
    }
  }
  enjoyQuiz();

  function guessNumber() {
    const correctNumber = 5;
    let attempts = 4;
    while (attempts > 0) {
      myGuessNumber = parseInt(prompt("guess a number between 0 and 9"));

      if (myGuessNumber === correctNumber) {
        alert("Congratulations! You guessed the correct number.");
        totalScore++;
        return;
      } else if (myGuessNumber > correctNumber && myGuessNumber !== 5) {
        alert("Too high, try again!");
      } else if (myGuessNumber < correctNumber && myGuessNumber !== 5) {
        alert("Too low, try again!");
      }
      attempts--;
    }
    alert(
      "You've run out of attempts. The correct answer was " +
        correctNumber +
        "."
    );
  }
  guessNumber();


  function guessFavoriteFruits() {
    const favoriteFruits = ["apple", "banana", "orange","watermelon"];
    const maxAttempts = 6;
    const guessedFruits = [];
  
    for (let i = 1; i <= maxAttempts; i++) {
      const guess = prompt("Guess one of my favorite fruits:");
  
      let isCorrectGuess = false;
      for (let j = 0; j < favoriteFruits.length; j++) {
        if (guess.toLowerCase() === favoriteFruits[j].toLowerCase()) {
          guessedFruits.push(guess);
          isCorrectGuess = true;
          break;
        }
      }
  
      if (isCorrectGuess) {
        alert("Correct! You guessed one of my favorite fruits.");
        totalScore++;
        break;
      } else {
        alert("Incorrect guess. Try again.");
      }
    }
  
    alert("Game over! You made " + guessedFruits.length + " correct guess(es). My favorite fruits are: " + favoriteFruits + "");//guessedFruits.join(", ") ;
  }
  
  guessFavoriteFruits();
  
alert(
  'Congratulations ' + user + ' you have answered ' + totalScore + ' questions correctly.'
)
  
  

  alert(
    "It is so nice to meet you " +
      user +
      " now you know that i have zero pets, my lucky number is 7 and you answered  "  +
      myLuckyNumber +
      " to believing in lucky numbers, you also know that I code 7 days a week, i will assume you code 7 days a week too!"
  );
}

