// Assignment Code
var generateBtn = document.querySelector("#generate");

//GIVEN I need a new, secure password

//WHEN I click the button to generate a password
//THEN I am presented with a series of prompts for password criteria

//WHEN prompted for password criteria
//THEN I select which criteria to include in the password

//WHEN prompted for the length of the password
//THEN I choose a length of at least 8 characters and no more than 128 characters

//WHEN asked for character types to include in the password
//THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters

//WHEN I answer each prompt
//THEN my input should be validated and at least one character type should be selected

//WHEN all prompts are answered
//THEN a password is generated that matches the selected criteria

//WHEN the password is generated
//THEN the password is either displayed in an alert or written to the page

function generatePassword() {
  var criteria = {
    lowerCase: confirm("Include lowercase characters?"),
    upperCase: confirm("Include uppercase characters?"),
    numeric: confirm("Include numbers?"),
    specialCharacter: confirm("Include special characters?")
  }

  if (!criteria.lowerCase && !criteria.upperCase && !criteria.numeric && !criteria.specialCharacter) {
    alert("At least one criteria field must be confirmed!!");
    console.log("All confirmations are false :PP");
  } else {
    console.log("Criteria is met :))");
    var length = prompt("Enter a number value between 8 and 128 characters.");

    if (length < 8 || length > 128) {
      alert("A value between 8 and 128 needs to be entered!!");
      return;
    } else {
      console.log("Length is valid :))");
    }
  }

  if (criteria.lowerCase === true) {
    var lowerCase = "abcdefghijklmnopqrstuvwxyz";
    console.log("We are using lowercase!!");
  } else {
    lowerCase = "";
    console.log("We are NOT using lowercase.")
  }
  if (criteria.upperCase === true) {
    var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    console.log("We are using uppercase!!");
  } else {
    upperCase = "";
    console.log("We are NOT using uppercase.")
  }
  if (criteria.numeric === true) {
    var numeric = "0123456789";
    console.log("We are using numbers!!");
  } else {
    numeric = "";
    console.log("We are NOT using numbers.")
  }
  if (criteria.specialCharacter === true) {
    var specialCharacter = "!@#$%^&*()_+-=<>,.?;";
    console.log("We are using special characters!!");
  } else {
    specialCharacter = "";
    console.log("We are NOT using special characters.")
  }

  // the actual randomization

  var criteriaSet = lowerCase + upperCase + numeric + specialCharacter;
  console.log(criteriaSet);

  var genPass = [];

  for (var i = 0; i < length; i++) {
    var newPassword = criteriaSet[Math.floor(Math.random() * criteriaSet.length)];
    genPass.push(newPassword);
  }

  var final = genPass.join("");

  console.log(final);
  return final;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
