// var typingInput = document.querySelector(".typing-input");
var startBtnInput = document.querySelector("#startBtn");


var words = ["javascript", "css", "html", "function"];
var randWords = Math.floor(Math.random() * words.length)
var selectedWord = words[randWords];
var guessedLetters = [];

console.log(selectedWord);

// Start Button even listener
startBtnInput.addEventListener("click", function(event) {
    event.preventDefault();
})

// To gather input when user presses letter key on keyboard
function keydownAction(event) {
    var keyDown = event.keyDown;
    
    document.querySelector("#key").textContent = keyDown;
}

// Will display dashes for selected word
var displayWord = "";
for (var i = 0; i < selectedWord.length; i++) {
    displayWord += "_";
}
document.getElementById("displayWord").textContent = displayWord;


var playGame = function (){
   
    // var inputElement = document.getElementById(typingInput);


}    

