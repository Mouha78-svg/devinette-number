'use strict';
let message = document.querySelector('.message');
const number = document.querySelector('.number');
let guess = document.querySelector('.guess');
const check = document.querySelector('.check');
let score = document.querySelector('.score');
let hightscore = document.querySelector('.highscore');
const again = document.querySelector('.again');

let secretNumber = Math.trunc(Math.random()* 20) + 1;
let count = 20;
let highScoreNum = 0;

function showMessage(message1){
  let result =   message.textContent = message1;
  return result;
}

check.addEventListener('click',function(){
    let guessNumber =Number(guess.value) ;
    if(!guessNumber){
        showMessage("Aucun numéro !");
    }else if(guessNumber == secretNumber){
        showMessage("Nombre correct !")
        number.textContent = secretNumber;
        document.body.style.backgroundColor = "green";
        number.style.width = "30rem";

        if(count > highScoreNum){
            highScoreNum = count;
            hightscore.textContent = highScoreNum;
        }

    }
    else if(guessNumber !== secretNumber){
        if(count > 1){
            count--;
            showMessage(guessNumber > secretNumber ? "Trop haut !" : "Trop bas !")
            score.textContent = count;
        }else{
            showMessage("Vous avez perdu le jeu")
            score.textContent = 0;
        }
    }
    
})

again.addEventListener('click',function(){
    let scoreNumber = 20;
    guess.value = '';
    secretNumber = Math.trunc(Math.random()* 20) + 1;
    showMessage("Commencer à deviner...");
    score.textContent = scoreNumber;
    number.textContent = '?';

    document.body.style.backgroundColor = "#222";
        number.style.width = "15rem";
});
