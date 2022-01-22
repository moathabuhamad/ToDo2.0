"use strict";

let Name;
let Gender;
let Age;
let skip;
let gendercorrect;

Name = prompt("Please enter your name");
Gender = prompt("Please enter you gender\nMale/Female");
gendercorrect =
  Gender.toLowerCase() === "male" || Gender.toLowerCase() === "female"
    ? true
    : false;
Age = prompt("How old are you?");
Age <= 0 ? alert("Age isn't correct") : (Age = Age);
skip = confirm("skip welcoming message?");
skip === false
  ? gendercorrect === true
    ? Gender.toLowerCase() === "male"
      ? alert("Welcome Mr. " + Name)
      : alert("Welcome Ms. " + Name)
    : alert("Welcome " + Name)
  : (skip = skip);
