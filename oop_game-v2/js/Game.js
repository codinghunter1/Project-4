/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor(missed, phrases, activePhrase){
        this.missed = 0;
        this.phrases = this.localPhases();
        this.activePhrase = null;
    }
    localPhases(){
        const phraseArray = [ //array of local phrases
            'When nothing is going right go left',
            'Never ask a starfish for directions',
            'Never judge a book by its movie',
            'Im not weird Im just limited editions',
            'I am too lazy to be lazy',
            'Smile today tommorrow could be worse',
            'learning sign language is very handy'
        ];
        const phraseList = phraseArray.map(quote => new Phrase(quote)); //call Phrases with local array of phrases
        return phraseList;
    }
    startGame(){
        const startScreen = document.querySelector("#overlay");
        startScreen.style.display = 'none'; //hide overlay
        this.activePhrase = this.GetRandomPhrase(); //call function
        this.activePhrase.addPhraseToDisplay(); //call function
    }
    GetRandomPhrase(){
        return this.phrases[Math.floor(Math.random() * this.phrases.length)]; //random number rounded down with floor from 0 - length of phrases array
    }
    handleInteraction(click){
        let letter = click.innerText; //value of click from received click value
        if(this.activePhrase.checkLetter(letter)){ //if true
            click.classList.add('chosen');
            click.disable = true; //hide / remove 
            this.activePhrase.showMatchedLetter(letter); //call function
            if(this.checkForWin()){ //if true
                this.gameOver(true); //gameover
            }
        }
        else {
            click.classList.add('wrong');
            if(click.disable !== true){
                click.disable = true;
                this.removeLife(); //call function to removce function
            }
        }
    }
    removeLife(){
        const heartLives = document.querySelectorAll('.tries img'); //image of heart in html
        heartLives[this.missed].src = 'image/lostHeart.png'; //change src of image to lost heart img
        this.missed++; //add misses up so [this.missed] moves through lifes
        if(this.missed >= 5){ //total lifes given
            this.gameOver(false); //gameover
        }
    }
    checkForWin(){ //checks to see if the player has revealed all of the letters in the active phrase
        const missingLetters = document.querySelectorAll('li.hide');
        return missingLetters.length == 0;
    }
    gameOver(finsishedBool){
        const overlayDiv         = document.querySelector('#overlay');
        const letterLeft         = document.querySelectorAll("#phrase li");
        const gameOverMess       = document.getElementById('game-over-message');
        const keyBoard           = document.querySelectorAll("#qwerty button");
        const lifeHearts         = document.querySelectorAll(".tries img");
        overlayDiv.style.display = '';
        if(finsishedBool){ //true
            overlayDiv.classList.remove('start');
            overlayDiv.classList.remove('lose');
            overlayDiv.classList.add('win');
            gameOverMess.textContent = "congrats, you are a WINNER";
        }
        else {
            overlayDiv.classList.remove('start');
            overlayDiv.classList.remove('win');
            overlayDiv.classList.add('lose');
            gameOverMess.textContent = "Sorry, you have no lives left, better luck next time";
        }
        letterLeft.forEach(letter => letter.remove());
        keyBoard.forEach(button => {
            button.disable = false;
            button.classList.remove("wrong");
            button.classList.remove("chosen");
            button.classList.add("key");
        });
        lifeHearts.forEach(heart => heart.scr = 'images/liveHeart.png');
    }
}