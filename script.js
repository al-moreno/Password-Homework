
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}
//Define variables with criteria fo password
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "{", "}", "~", "?", "<", ">", "/"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var arrayBank = [];
var randomPassword = "";



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Function that begins inquary of password criterias. 
function generatePassword() {
    var passwordLength = prompt("Please enter the number of characters you want for you new password. It must be between 8 and 128 characters.");

    if (!passwordLength || passwordLength < 8 || passwordLength > 128) {
        return alert("You must select a number between 8 and 128!");
}
// Variables which indicate if the specific criteria is to be included or not. 
var useLowerCase = confirm("Do you want to include lowercase characters?");
var useUpperCase = confirm("Do you want to include uppercase characters?");
var useNumbers = confirm("Do you want to include number characters?");
var useSpecialCharacters = confirm("Do you want to include special characters?");
    
    if (useLowerCase === true) {
        arrayBank += lowerCase;
}
    
    if (useUpperCase === true) {
        arrayBank += upperCase;
}
    
    if (useNumbers === true) {
        arrayBank += numbers;
}
    

   if (useSpecialCharacters === true) {
    arrayBank += specialCharacters;
}
    var randomPassword = " ";

    for (var i = 0; i < passwordLength; i++) {
        randomPassword += arrayBank[Math.floor(Math.random() * (arrayBank.length))];
        console.log(Math.floor(Math.random() * (arrayBank.length)));
        console.log(randomPassword);
}
    return randomPassword;

}