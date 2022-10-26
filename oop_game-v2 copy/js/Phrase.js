/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

//const letterPlaceHolders = document.getElementsByClassName("section");

class Phrase {
    constructor(phrase){ //constructor that receives a phrase parameter
        this.phrase = phrase.toLowerCase(); //initializing actual phrase object and to lower case
    }
    addPhraseToDisplay(){ //adds letter placeholders to the display when the game starts
        const phraseU1 = document.querySelector("#phrase ul"); //crrating element at unordered list iteams under phrase HTML structure
        for(let i = 0; i < this.phrase.length; i++){ //loop through length of array of phrases
            const group = document.createElement('div'); 
            let letter = this.phrase[i]; //through loop at each phrase to html as an list iteam
            const letterLi = document.createElement('li');
            
            if(letter !== " "){ //if not space
                letterLi.className = `hide letter ${letter}`; //hide 
                letterLi.textContent = `${letter}`; //text content of the list iteam = to letter
                
            }else {
                console.log("space"); //space
                letterLi.className = "space";
                letterLi.textContent = " ";
            }
            
            phraseU1.appendChild(letterLi); //add the letter list iteam to the phrase unorded list
        }
        console.log(this.phrase);
        console.log(phraseU1);
        return this.phrase; //return the phrase
    }
    checkLetter(guessLetter){ // checks to see if the letter selected by the player matches a letter in the phrase.
        return this.phrase.includes(guessLetter); 
    }
    showMatchedLetter(matchedLetter){
        const matchingList = document.getElementsByClassName(matchedLetter);
        for(let i = 0; i < matchingList.length; i++){
            let matchedLi = matchingList[i];
            matchedLi.classList.remove('hide'); //: reveals the letter(s) on the board that matches the player's selection.
            matchedLi.classList.add('show');
        }
    }
}