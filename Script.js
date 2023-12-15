'use strict';

// console.log(document.querySelector(".between"));
// // console.log(2);
// console.log(document.querySelector(".between").textContent);
// // console.log(document.)
// // alert("21211");
// document.querySelector(".between").textContent = `(Between 1 and 10)`;
// console.log(document.querySelector(".between").textContent);
// const a = "CHECK";
// document.querySelector(".number").textContent = 20;
// document.querySelector(".check").textContent = a;

// document.querySelector(".guess").value = 29;

// document.querySelector(".guess").value = 39;

// document.querySelector(".score").textContent = 292;


// document.querySelector('.check').addEventListener('click', 
// console.log(document.querySelector(".guess").value)
// );

// const x = function()
// {
//     console.log(document.querySelector(".guess").value);
//     document.querySelector(".message").textContent = `Winnnnnsss`;
// }

// document.querySelector('.check').addEventListener('click', x);

// const eve = function(x)
// {
//     const guess = Number(document.querySelector('.guess').value);
//     // console.log(document.querySelector(".guess").value);
//     console.log(guess, typeof guess);
// }

// document.querySelector('.check').addEventListener('click', () =>    eve(1));
// document.querySelector('.number').textContent = number;

let number = Math.trunc((Math.random() * 10) + 1);
let score = 10;
let highScore = 0;

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}

const eve = function () {

    const guessedValue = Number(document.querySelector('.guess').value);

    if (!guessedValue) {
        displayMessage(`Give a Number⛔`);
    }
    
    else if (guessedValue === number) {
        document.querySelector('.number').textContent = number;
        displayMessage(`Winnns 🤩🤩`);
        
        // document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('.area').style.background = '#1c2238';
        document.querySelector('.number').style.borderColor = '#000000';
        document.querySelector('.number').style.width = '30rem';
        
        if(score > highScore)
        {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    }

    else if(guessedValue !== number)
    {
        if (score > 1) {
            
            score--;
            document.querySelector('.score').textContent = score;
            
            displayMessage(guessedValue < number ? `⬇ Too Low` : `⬆ Too High`);
        }
        else {
            document.querySelector('.score').textContent = score;
            
            displayMessage(`Game Over💥`);
        }

    }

}

document.querySelector('.check').addEventListener('click', eve);

document.querySelector('.again').addEventListener('click', function() {
    number = Math.trunc((Math.random() * 10) + 1);
    document.querySelector('.number').textContent = number;
    score = 10;

    document.querySelector('.area').style.background = '#4e54c8';
    document.querySelector('.number').style.width = '15rem';
    
    displayMessage(`Start guessing...🤔`);
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = ''; 
});

document.addEventListener('keydown', function(e) {
    if(e.key === "Enter")  eve();
})
