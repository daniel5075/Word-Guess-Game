// setting variables
var wins = 0;
var losses = 0;
var guessRemain = 12;
var birdNames = [
    "robin",
    "cardinal",
    "blackbird",
    "nuthatch",
    "magpie",
    "starling",
    "jay",
    "nightingale"
];
var bird = "";
var splitBird = [];
var spaces = 0;
var dashesAndCorrectLetters = [];
var wrongLetter = [];


// functions

// choose individual word
function startGame() {

    bird = birdNames[Math.floor(Math.random() * birdNames.length)];
    //Get current word into individual lettes
    splitBird = bird.split("");
    spaces = splitBird.length;
    for (var i = 0; i < spaces; i++) {
        dashesAndCorrectLetters.push("_");
    }
    console.log(bird)
    console.log(dashesAndCorrectLetters);
    document.getElementById("birdIsTheWord").innerHTML = " " + dashesAndCorrectLetters.join(" ");
}

// compare guesses to word
function checkGuess(letter) {
    var IsLetterInWord = false;
    for (var i = 0; i < spaces; i++) {
        if (bird[i] === letter) {
            IsLetterInWord = true;
        }
    }
    if (IsLetterInWord) {
        for (var i = 0; i < spaces; i++) {
            if (bird[i] === letter) {
                dashesAndCorrectLetters[i] = letter;
            }
        }
    }

    else {
        wrongLetter.push(letter);
        guessRemain--;
    }
    console.log(dashesAndCorrectLetters);
    console.log(IsLetterInWord);

    function reset() {
        guessRemain = 0;
        wrongLetter = [];
        dashesAndCorrectLetters = [];
    }

}
function isComplete() {
    if (splitBird.toString() === dashesAndCorrectLetters.toString()) {
        wins++;
        reset()
        document.getElementById("winsRunningTotal").innerHTML = " " + wins;
    }
    else if (guessRemain === 0) {
        losses++;
        reset()
        document.getElementById("lossesRunningTotal").innerHTML = " " + losses;
    }
    document.getElementById("birdIsTheWord").innerHTML = " " + dashesAndCorrectLetters.join(" ");
    document.getElementById("remainingGuess").innerHTML = " " + guessRemain;
    console.log(guessRemain);
}

startGame()

document.onkeyup = function (event) {
    var guesses = String.fromCharCode(event.keyCode).toLowerCase();
    checkGuess(guesses);
    isComplete();
    document.getElementById("LettersPlayerGuessed").innerHTML = " " + wrongLetter.join(" ");
    console.log(wrongLetter);

}
