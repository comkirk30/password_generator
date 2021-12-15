
// Assignment code here
var enter;
var number;
var character;
var uppercase;
var lowercase;
// Start Password variables
// Special characters 
character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
// Numeric characters
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Alphabetical characters
lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Write password to the #password input
function writePassword() {

  var allOptions = [];
  var password = "";
  enter = window.prompt("How many characters do you want in your password? Choose between 8 and 128.");
  if (!enter) {
    alert("This needs a value");
} else if (enter < 8 || enter > 128) {
    // Validates user input

    enter = parseInt(prompt("You must choose between 8 and 128"));

} else {
    // questions
    var numberQuestion = confirm("Will this contain numbers?");
    var characterQuestion = confirm("Will this contain special characters?");
    var uppercaseQuestion = confirm("Will this contain Uppercase letters?");
    var lowercaseQuestion = confirm("Will this contain Lowercase letters?");


    if (numberQuestion === true){
        allOptions = [...allOptions, ...number];
    }

    if (characterQuestion === true){
      allOptions = [...allOptions, ...character];
  }
  if (lowercaseQuestion === true){
    allOptions = [...allOptions, ...lowercase];
}
if (lowercaseQuestion === true){
  allOptions = [...allOptions, ...uppercase];
}



    for (var i = 0; i < enter; i++) {
      var choice = allOptions[Math.floor(Math.random() * allOptions.length )];
     
      password = password + choice;

    }

    var passwordText = document.querySelector("#password");
   passwordText.value = password;
};


}

//event listener for button
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);







