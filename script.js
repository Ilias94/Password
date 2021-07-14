let firstPassword = document.getElementById("firstPassword");
let secondPassword = document.getElementById("repeatPassword");
let length = document.getElementById("length");
let capital = document.getElementById("capital");
let message = document.getElementById("message");
let letter = document.getElementById("letter");
let special_characters = document.getElementById("special_character");
let reapeated_Password = document.getElementById("reapeated_Password");

firstPassword.onkeyup = function () {
    if (firstPassword.value.length >= 8) {
        length.remove();
    } else {
    }

    let loweCaseLetters = /[a-z]/;
    if (firstPassword.value.match(loweCaseLetters)) {
        letter.remove();
    }

    let upperCaseLetters = /[A-Z]/;
    if (firstPassword.value.match(upperCaseLetters)) {
        capital.remove();
    }

    let specialCharacters = /[!@#$%^&*(),.?":{}|<>]/g
    if (firstPassword.value.match(specialCharacters)) {
        special_characters.remove()
    }

}

secondPassword.onkeyup = function () {
    if (firstPassword.value === secondPassword.value) {
        reapeated_Password.remove();
    }
}