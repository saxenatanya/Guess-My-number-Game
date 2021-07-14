'use strict';

let actualNumber = Math.round(Math.random(document.querySelector('.number').textContent) * 20);
// console.log(actualNumber);
let body = document.querySelector('body');
let check = document.querySelector('.check');
let inputCheck = document.querySelector('.guess');
let hintMessage = document.querySelector('.message');
let again = document.querySelector('.again');
let score = 20;
let highScore = document.querySelector('.highscore');

//setting the high score from local storage
highScore.textContent= window.localStorage.getItem('LocalHighScore');
console.log(window.localStorage.getItem('LocalHighScore'));
// to check the guessed number is correct or not and updating hint message color and highscore
check.addEventListener('click', () => {
    let inputValue = inputCheck.value;
    if (actualNumber == inputValue) {
        hintMessage.textContent = "Yeaaaaa 👍 correct";
        body.style.backgroundColor = 'green';
        highScore.textContent = score;
        window.localStorage.setItem('LocalHighScore', score);
       
    }
    else if (actualNumber != inputValue) {
        if(score >1){
            hintMessage.textContent = actualNumber > inputValue ? "Too low" : "Too high";
            score = score - 1;
            document.querySelector('.score').textContent = score;
           
        }
        else{
            hintMessage.textContent = "You Lost the game ,  play again";
            body.style.backgroundColor = 'red';
        }
        
    }
});

//to relaod the page on again button click
again.addEventListener('click', () => {
    window.location.reload();
});
