
let score = JSON.parse(localStorage.getItem('score'));

if(score == null){
score = {
    wins : 0,
    loss : 0,
    tie : 0

};
}

updateScore();



function playerGame(playerMove){

const computerMove = pickComputerMove();

    let result = '';

    if(playerMove == 'Scissors'){

        if(computerMove=='rock'){
        result = 'You lose';
    }
    else if(computerMove=='paper'){
        result = 'You win';
    }
    else if(computerMove=='Scissors'){
        result = 'tie';

    }

}

    else if(playerMove == 'rock'){


    if(computerMove=='rock'){
        result = 'tie';
    }
    else if(computerMove=='paper'){
        result = 'You lose';
    }
    else if(computerMove=='Scissors'){
        result = 'You win';

    }
}
else if(playerMove=='paper'){

        if(computerMove=='rock'){
            result = 'You win';
        }
        else if(computerMove=='paper'){
            result = 'tie';
        }
        else if(computerMove=='Scissors'){
            result = 'You lose';

        }

}

if(result=='You win'){
    score.wins += 1;
} else if(result=='You lose'){
    score.loss += 1;
} else if(result=='tie'){
    score.tie += 1;
} 


localStorage.setItem('score' , JSON.stringify(score));

// why localStorage -- > value are still there if we refresh page that's why we used localStorage.
// localstorage only supporst strings so we have to convert object into string using stringify and then when we get the value out
// we can convert that json string into object using json parser


updateScore();

document.querySelector('.js-result').
innerHTML = `${result}`;

document.querySelector('.js-moves').
innerHTML = `You
    <img src="images/${playerMove}-emoji.png" class="move-icon">
    Computer
    <img src="images/${computerMove}-emoji.png" class="move-icon"> `;



}


function updateScore(){
document.querySelector('.js-score')
 .innerHTML = `wins : ${score.wins} , lose : ${score.loss} , tie : ${score.tie} `;
}




function pickComputerMove(){

    const randomNum =  Math.random();

    let computerMove = '';



if(randomNum >=0 && randomNum < 1/3){
    computerMove = 'rock';
}
else if(randomNum >= 1/3 && randomNum < 2/3){
    computerMove = 'paper';

} 
else if(randomNum >= 2/3 && randomNum < 1){
    computerMove = 'Scissors';

}

return computerMove;


}
