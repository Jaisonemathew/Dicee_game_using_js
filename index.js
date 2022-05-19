var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomimagesource = "images/dice" + randomNumber1 + ".png"
var randomimagesource2 = "images/dice" + randomNumber2 + ".png"
document.querySelectorAll("img")[0].setAttribute("src", randomimagesource);
document.querySelectorAll("img")[1].setAttribute("src", randomimagesource2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 wins 🚩";
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 wins 🚩";
} else {
    document.querySelector("h1").innerHTML = "Draw 🏳️";
}
