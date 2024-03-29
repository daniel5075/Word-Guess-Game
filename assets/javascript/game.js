// setting variables
var wins = 0;
var losses = 0;
var guessRemain = 9;
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
    // document.getElementById("birdImage").src = "https://daniel5075.github.io/Word-Guess-Game/assets/images/birdflock.jpg"
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
        checkDuplicateLetter(letter)
    }
}


//check for duplicate wrong letter
function checkDuplicateLetter(checkwrong) {
    var duplicateLetter = false;
    console.log("Check wrong letter " + checkwrong);
    console.log(wrongLetter.length)
    for (var i = 0; i < wrongLetter.length; i++) {
        if (wrongLetter[i] === checkwrong) {
            duplicateLetter = true;
            console.log("wrong letter " + wrongLetter[i])
        }
    }
    if (duplicateLetter) { }
    else {
        wrongLetter.push(checkwrong);
        guessRemain--;
        console.log("gusses remaining " + guessRemain);
    }
}

function photoSound() {

    if (bird === "robin") {
        const sound = new Audio()
        sound.src = "https://daniel5075.github.io/Word-Guess-Game/assets/sounds/robin.mp3";
        sound.play();
        document.getElementById("birdImage").src = "https://daniel5075.github.io/Word-Guess-Game/assets/images/robin.jpg"
    }
    else if (bird === "cardinal") {
        const sound = new Audio()
        sound.src = "https://daniel5075.github.io/Word-Guess-Game/assets/sounds/cardinal.mp3"
        sound.play()
        document.getElementById("birdImage").src = "https://daniel5075.github.io/Word-Guess-Game/assets/images/cardinal.jpg"
    }

    else if (bird === "blackbird") {
        const sound = new Audio()
        sound.src = "https://daniel5075.github.io/Word-Guess-Game/assets/sounds/blackbird.wav"
        sound.play()
        document.getElementById("birdImage").src = "https://daniel5075.github.io/Word-Guess-Game/assets/images/blackbird.jpg"
    }

    else if (bird === "nuthatch") {
        const sound = new Audio()
        sound.src = "https://daniel5075.github.io/Word-Guess-Game/assets/sounds/nuthatch.wav"
        sound.play()
        document.getElementById("birdImage").src = "https://daniel5075.github.io/Word-Guess-Game/assets/images/nuthatch.jpg"
    }

    else if (bird === "magpie") {
        const sound = new Audio()
        sound.src = "https://daniel5075.github.io/Word-Guess-Game/assets/sounds/magpie.wav"
        sound.play()
        document.getElementById("birdImage").src = "https://daniel5075.github.io/Word-Guess-Game/assets/images/magpie.jpg"
    }

    else if (bird === "starling") {
        const sound = new Audio()
        sound.src = "https://daniel5075.github.io/Word-Guess-Game/assets/sounds/starling1.wav"
        sound.play()
        document.getElementById("birdImage").src = "https://daniel5075.github.io/Word-Guess-Game/assets/images/starling.jpg"
    }

    else if (bird === "jay") {
        const sound = new Audio()
        sound.src = "https://daniel5075.github.io/Word-Guess-Game/assets/sounds/jay.mp3"
        sound.play()
        document.getElementById("birdImage").src = "https://daniel5075.github.io/Word-Guess-Game/assets/images/jay.jpg"
    }

    else {
        const sound = new Audio()
        sound.src = "https://daniel5075.github.io/Word-Guess-Game/assets/sounds/nightingale.mp3"
        sound.play()
        document.getElementById("birdImage").src = "https://daniel5075.github.io/Word-Guess-Game/assets/images/nightingale.jpg"
    }
}
// reset for new game
function resetme() {
    guessRemain = 9;
    wrongLetter = [];
    dashesAndCorrectLetters = [];
    startGame()
}


function isComplete() {
    if (splitBird.toString() === dashesAndCorrectLetters.toString()) {
        wins++;
        photoSound()
        resetme()
        document.getElementById("winsRunningTotal").innerHTML = " " + wins;
    }
    else if (guessRemain === 0) {
        losses++;
        resetme()
        document.getElementById("lossesRunningTotal").innerHTML = " " + losses;
    }
    document.getElementById("birdIsTheWord").innerHTML = " " + dashesAndCorrectLetters.join(" ");
    document.getElementById("remainingGuess").innerHTML = " " + guessRemain;
    console.log("bottom guess remain " + guessRemain);
}

startGame()
document.getElementById("birdImage").src = "https://daniel5075.github.io/Word-Guess-Game/assets/images/birdflock2.jpg"
document.onkeyup = function (event) {
    var guesses = String.fromCharCode(event.keyCode).toLowerCase();
    checkGuess(guesses);
    isComplete();
    document.getElementById("letterPlayerGuessed").innerHTML = " " + wrongLetter.join(" ");
}
