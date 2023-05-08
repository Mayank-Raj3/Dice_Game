'use strict';

// selecting the elements 
const player1El= document.querySelector('.player--1');
const player0El= document.querySelector('.player--0');
const score0El  = document.querySelector('#score--0');
const score1El  = document.getElementById('score--1');
const current0El= document.getElementById('current--0');
const curren1El = document.getElementById('current--1');
const diceEl    = document.querySelector('.dice');
const roll      = document.querySelector('.btn--roll');
const btnnew    = document.querySelector('.btn--new');
const btnHold   = document.querySelector('.btn--hold');

// making scores to zero 
score0El.textContent=0;
score1El.textContent=0;
// selecting  the diece to hide it class list we dont give .  
diceEl.classList.add('hidden');

const scores =[0,0];

let currentScore = 0 ;
let activePlayer = 0 ; 
let winnerPlayer = -1 ; 
let playing = true ;


roll.addEventListener('click',function(){
	if(playing){
		//createing the random number 
		let dice = Math.trunc(Math.random()*6)+1; 
		// removeing the hidden class and displaying the dice according to dice rolled
		diceEl.classList.remove('hidden');
		diceEl.src=`dice-${dice}.png`;
		
		//check for rolled dice 
		if(dice !=1){
			//add the score to currenr score 
			currentScore+=dice; 
			document.getElementById(`current--${activePlayer}`).textContent=currentScore;
			// current0El.textContent=currentScore;
			
		}else{
			
			document.getElementById(`current--${activePlayer}`).textContent=0;
			activePlayer=activePlayer==0?1:0;
			currentScore = 0; 
			// we can use toggle instead of toggle it itself checks that weather that is present or not 
			//  if not it will add 
			player0El.classList.toggle('player--active');
			player1El.classList.toggle('player--active');
		}
		
			}
});

btnHold.addEventListener('click',function(){
	if(playing){
		//1. add current score to score of active player 
		scores[activePlayer] +=currentScore;
		document.getElementById(`score--${activePlayer}`).textContent=scores[activePlayer];
	
		// 2.check if players's score is >=100 then finish the player 
		
		if(scores[activePlayer]>=20){
			winnerPlayer=activePlayer;
			playing= false ;
			document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
			document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
			diceEl.classList.toggle('hidden');
			 
		}
		
			
		
		
		//3 switch to other player 	
		
		activePlayer=activePlayer==0?1:0;
		currentScore = 0; 
		document.getElementById(`current--${activePlayer}`).textContent=0;
		// we can use toggle instead of toggle it itself checks that weather that is present or not 
		//  if not it will add 
		player0El.classList.toggle('player--active');
		player1El.classList.toggle('player--active');
		
		
	}
});


btnnew.addEventListener('click', function(){
	document.getElementById('score--1').textContent=0;
	document.getElementById('score--0').textContent=0;
	document.getElementById('current--0').textContent=0;
	document.getElementById('current--1').textContent=0;
	document.querySelector(`.player--${winnerPlayer}`).classList.toggle('player--winner');
	document.querySelector(`.player--${winnerPlayer}`).classList.toggle('player--active');
	currentScore=0;
	scores[0]=0;
	scores[1]=0;
	playing=true;
	
	
});