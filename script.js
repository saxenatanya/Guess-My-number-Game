'use strict';

let actualNumber = Math.round(Math.random(document.querySelector('.number').textContent) * 20);
// console.log(actualNumber);
let body = document.querySelector('body');
let check = document.querySelector('.check');
let inputCheck = document.querySelector('.guess');
let hintMessage = document.querySelector('.message');
let again = document.querySelector('.again');
let score = document.querySelector('.score').textContent;
let highScore = document.querySelector('.highscore');

// to check the guessed number is correct or not and updating hint message color and highscore
check.addEventListener('click', () => {
    let inputValue = inputCheck.value;
    // console.log(score);
    if (actualNumber == inputValue) {
        console.log("yeaaaaa👍");
        hintMessage.textContent = "yeaaaaa 👍 correeeccctt";
        body.style.backgroundColor = 'green';
        highScore.textContent = score;
    }
    else if (actualNumber > inputValue) {
        console.log("Too low");
        hintMessage.textContent = "too low"
        score = score - 1;
        document.querySelector('.score').textContent = score;
    }
    else if (actualNumber < inputValue) {
        console.log("Too high");
        hintMessage.textContent = "to high"
        score = score - 1;
        document.querySelector('.score').textContent = score;

    }
});

//to relaod the page on again button click
again.addEventListener('click', () => {
    window.location.reload();
});