"use strict";

//Random Game
const form = document.getElementById("guess-form");
const input = document.getElementById("user-guess");
const result = document.getElementById("result");

//Actual function
form.onsubmit = function (e) {
// to prevent default
  e.preventDefault();
//alrighty this for number generatored and the number submitted by the user
  const guess = parseInt(input.value, 10);
  const target = Math.floor(Math.random() * 10) + 1;
//Logic for Game 

  if (guess === target) {
    result.innerHTML = "🎉 You guessed it! The number was " + target;
  } else {
    result.innerHTML = "❌ Wrong guess! You chose " + guess + ", but the number was " + target;
  }
};







// Product Display Now


















// Event Listeners
