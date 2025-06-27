"use strict";

//Random Game
const gameform = document.getElementById("guess-form");
const input = document.getElementById("user-guess");
const result = document.getElementById("result");

//Actual function
gameform.onsubmit = function (e) {
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

//Product Display


//To grab stuff in html
var buttons = document.querySelectorAll(".product-nav button");
var products = document.querySelectorAll(".productDisplay > div");

//hides div and only matches to button index
function show(index) {
  for (var i = 0; i < products.length; i++) {
    products[i].style.display = "none";
  }
  products[index].style.display = "block";
}
//loops through each button and sets oncklick event 
for (var i = 0; i < buttons.length; i++) {
  buttons[i].onclick = makeHandler(i);
}
//remember value of i 
function makeHandler(i) {
  return function () {
    show(i);
  };
}

show(0); 


// Form Validation and submission

// Grab inputs and form
var form = document.querySelector("footer form");
var fullName = document.getElementById("fullname");
var phone = document.getElementById("phone");
var email = document.getElementById("email");
var comments = document.getElementById("comments");
var contactRadios = document.querySelectorAll('input[name="contact_method"]');

// Add error spans
function insertErrorSpan(input) {
  if (!input.nextElementSibling || !input.nextElementSibling.classList.contains("input-error")) {
    var span = document.createElement("span");
    span.className = "input-error";
    span.style.color = "#c0392b";
    span.style.display = "block";
    input.parentNode.insertBefore(span, input.nextSibling);
  }
}

function clearErrors() {
  var errorSpans = document.querySelectorAll(".input-error");
  errorSpans.forEach(function (span) {
    span.textContent = "";
  });
}

// Validation Patterns
var namePattern = /^[A-Za-z\s]{2,50}$/;
var phonePattern = /^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;
var emailPattern = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;

form.onsubmit = function (e) {
  e.preventDefault();
  clearErrors();

  var isValid = true;


  // As a record, validations use nextelement.sibling, not sure if most optimal but this works so I think its fine?


  // Validate name
  insertErrorSpan(fullName);
  if (!namePattern.test(fullName.value.trim())) {
    fullName.nextElementSibling.textContent = "Please enter a valid full name.";
    isValid = false;
  }

  //Validate comments
  insertErrorSpan(comments);
  if (comments.value.trim() === "") {
    comments.nextElementSibling.textContent = "Comments are required.";
    isValid = false;
  }

  //for radio buttons but using .checked found that it works the best
  var selectedMethod = null;
  for (var i = 0; i < contactRadios.length; i++) {
    if (contactRadios[i].checked) {
      selectedMethod = contactRadios[i].value;
      break;
    }
  }

  if (!selectedMethod) {
    alert("Please select your preferred contact method.");
    isValid = false;
  }

  // Validate based on selected method
  if (selectedMethod === "phone") {
    insertErrorSpan(phone);
    if (!phonePattern.test(phone.value.trim())) {
      phone.nextElementSibling.textContent = "Phone number format is invalid.";
      isValid = false;
    }
  }

  if (selectedMethod === "email") {
    insertErrorSpan(email);
    if (!emailPattern.test(email.value.trim())) {
      email.nextElementSibling.textContent = "Email format is invalid.";
      isValid = false;
    }
  }

  // finsihes validation and tahnks user for input
  if (isValid) {
    var name = fullName.value.trim();
    var method = selectedMethod;
    var comment = comments.value.trim();

    form.reset();
    clearErrors();

    var msg = document.createElement("div");
    msg.className = "thank-you";
    msg.style.marginTop = "1rem";
    msg.style.color = "#207f4c";
    msg.innerHTML =
      "<h2>Thank you, " + name + "!</h2>" +
      "<p>We'll reach out to you via <strong>" + method + "</strong>.</p>" +
      "<p>Your message: \"" + comment + "\"</p>";

    form.parentNode.appendChild(msg);
  }
};



// Last thing: Dark Mode
const toggleBtn = document.getElementById("mode-toggle");

// Load saved mode from localStorage
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
  toggleBtn.textContent = "☀️ Light Mode";
}

toggleBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
  const isDark = document.body.classList.contains("dark-mode");

  toggleBtn.textContent = isDark ? "Light Mode" : "Dark Mode";
  localStorage.setItem("theme", isDark ? "dark" : "light");
});













