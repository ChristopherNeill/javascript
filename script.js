
// global variables
var pwd= document.getElementById('password');
var copyBtn = document.getElementById('copy');
var generateBtn = document.getElementById('generate');



// password generator function
generateBtn.addEventListener('click', function(){

//    where the password is stored once cleared
    pwd.value='';

//     function variables
    var passwordLength = prompt('How many characters?');
    var specialCharacters = confirm('Include special characters?');
    var numbers = confirm('Include numbers?');
    var upperCaseLetters = confirm('Include upper case letters');
    var lowerCaseLetters = confirm('Include lower case letters');
    var characterSet = "";
    var password = "";

//     passwordLength less than 8 characters
    if (passwordLength < 8) {
      alert('Password must be at least 8 characters');
      passwordLength = prompt('How many characters?');
    }
//     passwordLength more than 128 characters
    if (passwordLength > 128){
      alert('Password must be less than 128 characters');
      passwordLength = prompt('How many characters');
    }

//     confirming special characters and adding them to characterSet
    if (specialCharacters) {
        specialCharacters = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
        characterSet += specialCharacters;
    }

//     confirming numbers and adding them to characterSet
    if (numbers) {
        numbers = '0123456789';
        characterSet += numbers;
    }

//     confirming lower case letters and adding them to characterSet
    if (lowerCaseLetters) {
        lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
        characterSet += lowerCaseLetters;
    }

//     confirming upper case letters and adding them to characterSet
    if (upperCaseLetters) {
        upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        characterSet += upperCaseLetters;
    }

//    publishing selected characterSet to the console for confirmation and debugging
    console.log(characterSet);

//    rendering characterSet string after a random number is generated and adding to password based on number of passwordLength
    for(var i = 0; i <  passwordLength; i ++){
        password += characterSet.charAt(Math.floor(Math.random() * characterSet.length));
    }

//     publishing password string to the passwordzone
    pwd.value += password;


});

// copy to clipboard
copyBtn.addEventListener('click', function() {

    //     selecting text
        pwd.select();
    
    
    //     copying password to clipboard
        document.execCommand('copy');
    
    //     confirmation that password has been copied to clipboard
        alert('copied to clipboard');
    });

