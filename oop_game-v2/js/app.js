/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const StartGameButton = document.getElementById("btn__reset");
const allKeyBoard = document.getElementById("qwerty");
const individualKey = document.querySelectorAll(".key");
const overlayDiv = document.getElementById("overlay");
let newGame;

StartGameButton.addEventListener("click", () => { //start game / open game
    newGame = new Game();
    newGame.startGame();
});

allKeyBoard.addEventListener("click", event => { //target key events 
    if(event.target.className == 'key'){
        newGame.handleInteraction(event.target);
        console.log("key:", event.target);
    }
});

document.addEventListener('keyup', event => { //click events
    if(overlayDiv.style.display == 'none'){
        individualKey.forEach(key => {
            if(key.textContent == event.target){
                newGame.handleInteraction(key);
            }
        });
    }
    if(overlayDiv.style.display !== "none"){
        if(event.key == 13){ //enter
            newGame = new Game;
            Game.startGame();
        }
    }
});
document.addEventListener("keypress", event => { //keyboard events
    console.log(event.key);
    if(overlayDiv.style.display == 'none'){
        individualKey.forEach(Key => {
            if(Key.textContent == event.key){
                newGame.handleInteraction(Key);
            }
        });
    }
    if(overlayDiv.style.display !== "none"){ 
        if(event.key == 13){
            newGame = new Game;
            Game.startGame();
        }
    }
});

const buttonRed = document.getElementById("button-color-red");
const buttonBlue = document.getElementById("button-color-blue");
const buttonGreen = document.getElementById("button-color-green");
const main = document.getElementById("body");
main.style.backgroundColor = 'white'


function backgroundColor(element, color){ //changing background color
    element.addEventListener("click", event => { //function for changing each color
        event.target.style.backgroundColor = color;
        if(main.style.backgroundColor == 'white'){ //start background color
            main.style.backgroundColor = color;
            
            if(element == buttonBlue){
                buttonBlue.textContent = "White";
                buttonBlue.style.background = 'white';
                buttonGreen.style.display = 'none';
                buttonRed.style.display = 'none';
            }
            else if(element == buttonRed){
                buttonRed.textContent = "White";
                buttonRed.style.background = 'white';
                buttonGreen.style.display = 'none';
                buttonBlue.style.display = 'none';
            }
            else if(element == buttonGreen){
                buttonGreen.textContent = "White";
                buttonGreen.style.background = 'white';
                buttonRed.style.display = 'none';
                buttonBlue.style.display = 'none';
            }
            
        }
        else{
            buttonBlue.textContent = "Blue";
            buttonGreen.textContent = "Green";
            buttonRed.textContent = "Red";
            main.style.backgroundColor = 'white';
            buttonGreen.style.display = 'block';
            buttonBlue.style.display = 'block';
            buttonRed.style.display = 'block';
        }
    });
}

backgroundColor(buttonRed, 'rgb(250, 81, 81, 0.8)');
backgroundColor(buttonBlue, 'rgb(30, 145, 253, 0.8)');
backgroundColor(buttonGreen, 'rgb(3, 172, 3, 0.8)');




