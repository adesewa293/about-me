
"use strict"

function showPrompt(){

  let user;
  let petNum;
  let myLuckyNumber;
  let myCodingDays;
  let gamePrompt;
  let enjoyMyquiz;
  
  alert("Hi, I'm Adesewa, welcome to my site");
  function userName() {
    user = prompt("what is your name?");
    alert("welcome to my page " + user + "!");
    gamePrompt = prompt("do you want to play a guessing game?");
    // console.log(user);
    if (gamePrompt.toLowerCase() === "yes" || gamePrompt.toLowerCase() === "y") {
      alert("Okay then, let us play " + user);
    } else if (gamePrompt.toLowerCase() == "no" || gamePrompt.toLowerCase() === 'n'){
      alert(
        "You have to seee my prompts. lets play pleaseeeeeeee *inserts cute eyes*"
      );
    }
  }
  userName();
  
  function numOfPets() {
    petNum = prompt("Do you think i own any pets " + user + "?");
    // petNum = parseInt(petNum);
    // console.log(petNum);
    // console.log(typeof petNum);
  
    if (petNum.toLowerCase() === 'yes'|| petNum.toLowerCase() === 'y') {
      alert("uh oh, i actually have zero");
    } else if (petNum.toLowerCase() === 'no'|| petNum.toLowerCase() === 'n') {
      alert("that is correct, you do know me!");
    }
  }
  numOfPets();
  
  function luckyNumber() {
    myLuckyNumber = prompt(
      "Do you believe in lucky numbers?"
    );
    // myLuckyNumber = parseInt(myLuckyNumber);
    // console.log(luckyNumber);
    // console.log(typeof luckyNumber);
    if (myLuckyNumber.toLowerCase() === 'yes' || myLuckyNumber.toLowerCase() === 'y') {
      alert("me too!");
    } else if (myLuckyNumber.toLowerCase() === 'no'|| myLuckyNumber.toLowerCase() === 'n'){
      alert("lucky numbers are unique to each person, mine is 7 tho");
    }
  }
  
  luckyNumber();
  
  function codingDays() {
    myCodingDays = prompt("do you think i code everyday a week?");
    // myCodingDays = parseInt(myCodingDays);
    // console.log(codingDays);
    // console.log(typeof codingDays);
    if (myCodingDays.toLowerCase() === 'yes'||myCodingDays.toLowerCase() === 'y') {
      alert(
        "you must know me so well, talk is cheap, just show me the code."
      );
    } else if( myCodingDays.toLowerCase()==='no' || myCodingDays.toLowerCase() === 'n'){
      alert("I wish. I actually do code everyday.");
    }
  }
  codingDays();

  function enjoyQuiz(){
    enjoyMyquiz = prompt("Did you enjoy my quiz?");
    if (enjoyMyquiz.toLowerCase() === 'yes' || enjoyMyquiz.toLowerCase() === 'y'){
      alert ('Thanks, i enjoyed creating it too')
    } else if (enjoyMyquiz.toLowerCase() === 'no' || enjoyMyquiz.toLowerCase() === 'n'){
      alert("I will get creative next time")
    }
  }
  enjoyQuiz();



  alert(
    "It is so nice to meet you " +
      user +
      " now you know that i have zero pets, my lucky number is 7 and yours is " +
      myLuckyNumber +
      " and i code 7 days a week, i will assume you code " +
      myCodingDays +
      " days a week too!"
  );
}
  

   
