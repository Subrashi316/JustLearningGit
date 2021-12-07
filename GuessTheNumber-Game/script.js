'use strict';


let guessNumber;

let score = document.getElementById('score');
let number = document.querySelector('.number');
let status = document.getElementById('status');
let highScore = document.getElementById('highScoreValue');
let input = document.getElementById('textInput');

let realScore;
let realHighScore = 0;

const closeModal = function(){
    document.querySelector('.modal').classList.add('hidden');
    document.querySelector('.overlay').classList.add('hidden');
}


document.querySelector('.closebtn').addEventListener('click',closeModal);
document.querySelector('.overlay').addEventListener('click',closeModal);

function start()
{
    guessNumber = Math.ceil((Math.random()*20));
    realScore = 20;
    score.innerText = realScore;
    number.innerText = '?';
    status.innerText = ' Start guessing...';
    document.querySelector('body').style = 'hsl(40, 100%, 50%);';
}
function Won()
{
    realHighScore = (realHighScore < Number(realScore)) ? realScore : realHighScore;
    highScore.innerText = realHighScore;
    status.innerText = '🎯 You guessed it right';
    number.innerText = guessNumber;
    document.querySelector('body').style.background = 'hsl(109, 100%, 43%)';
}
function Wrong()
{

    realScore--; 
    score.innerText = realScore;
    var val = Number(input.value);
    if(val > guessNumber)
    {
        status.innerText = '📈 Too high';
    }
    else
    {
        status.innerText = '📉 Too low';
    }
}

function check()
{
    let text = Number(input.value);

    if(text == 0)
    {
        status.innerText = 'Please input valid number!';
        return ;
    }

    if(text == guessNumber)
    {
        Won();
    }
    else
    {
        if(realScore <= 1)
        {
            status.innerText = "You lost the game!";
            
            score.innerText = 0;
        }
        else
        {
            Wrong();
        }

    }

}
start();

