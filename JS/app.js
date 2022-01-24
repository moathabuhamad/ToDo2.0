"use strict";

let inputName;
let inputGender = "";
let inputAge;
let skip;
let genderValid;
let answers = ["", "", ""];
let questions = [
  "Do you like Sports\nYes/No?",
  "Do you like Reading Books\nYes/No?",
  "Do you like your TA at ASAC\nYes/Yes?",
];

function promptName() {
  inputName = prompt("Please enter your name");
}
function promptGender() {
  while (
    inputGender.toLowerCase() != "male" &&
    inputGender.toLowerCase() != "female"
  ) {
    inputGender = prompt("Please enter you gender\nMale/Female");
    if (inputGender == null) {
      inputGender = "";
      break;
    }
  }
  genderValid =
    inputGender.toLowerCase() === "male" || inputGender.toLowerCase() === "female"
      ? true
      : false;
}

function promptQuestions() {
  for (let i = 0; i < 3; i++) {
    while (
      answers[i].toLowerCase() != "yes" &&
      answers[i].toLowerCase() != "no" &&
      answers[i] != "Invalid"
    ) {
      answers[i] = prompt(questions[i]);
      checkAnswers(i);
    }
  }
}
function checkAnswers(x) {
  if (answers[x] == null) {
    answers[x] = "Invalid";
  }
}
function printAnswers() {
  for (var i = 0; i < 3; i++) {
    console.log(questions[i] + " " + answers[i]);
  }
}

function promptAge() {
  inputAge = prompt("How old are you?");
  inputAge <= 0 ? alert("Age isn't valid") : (inputAge = inputAge);
}
function greetingMessage() {
  skip = confirm("skip welcoming message?");
  skip === false
    ? genderValid === true
      ? inputGender.toLowerCase() === "male"
        ? alert("Welcome Mr. " + inputName)
        : alert("Welcome Ms. " + inputName)
      : alert("Welcome " + inputName)
    : (skip = skip);
}

promptName();
promptGender();
promptAge();
greetingMessage();
promptQuestions();
checkAnswers();
printAnswers();
