/* Calling the elements by their ID */
const startBtn = document.getElementById('start-btn');
const messageEl = document.getElementById('message-el');
const sumEl = document.getElementById('sum-el');
const cardsEl = document.querySelector('#cards-el');
const ncardEl = document.getElementById('ncard-el');
const playerEl = document.querySelector('#player-el');
const standBtn = document.getElementById('stand-el');
const resetBtn = document.querySelector('.reset-btn');
const crupierEl = document.getElementById('crupier-el');
const csumEl = document.getElementById('csum-el');

/* GAME START */
let player = {
    name: 'Usuario',
    chips: 200
}
playerEl.textContent = player.name + ': $ ' + player.chips;

/* GAME VARIABLES */
/* Calling player and crupier cards */
let allCards = [];
let allCrupierCards = [];
/* cards and messages display */
let message = '';
/* cards total */
let sum = 0;
let crupSum = 0;
/* game check */
let hasBlackJack = false;
let isAlive = false;

/* GAME FUNCTIONS */
/* Card function */
function getRandomCard() {
    let rCard = Math.floor( Math.random() * 13) + 1
    if(rCard > 10) {
        return 10
    }else if(rCard < 2) {
        return 11
    }else{
        return rCard
    }
}

/* GAME DEVELOP */
/* Initiating Game */
const startGame = () => {
    
    isAlive = true
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    allCards.push(firstCard,secondCard);
    sum = firstCard + secondCard;
    sumEl.textContent = sum;
    let crupierCard = getRandomCard();
    allCrupierCards.push(crupierCard)
    crupSum = crupierCard
    crupierEl.textContent = crupierCard;
    csumEl.textContent = crupSum
    renderGame()

}

/* Game Logic */
const renderGame = () => {
    
    cardsEl.textContent = ''
    for(i=0; i<allCards.length; i++) {
        cardsEl.textContent += allCards[i] + ' '
    }

    if(sum <= 20) {
        message = '¿Quieres otra carta?'
        hasBlackJack = false;
    }else if(sum === 21) {
        message = 'BLACKJACK, Ganaste!!!'
        hasBlackJack = true;
    }else{
        message = 'Te pasaste, perdiste'
        isAlive = false;
    }

    messageEl.textContent = message
    sumEl.textContent = sum
}

/* ANOTHER CARD */

const newCard = () => {

    if(hasBlackJack === false && isAlive === true) {
        let thirdCard = getRandomCard();
        allCards.push(thirdCard);
        sum += thirdCard;
        sumEl.textContent = sum
        renderGame()
    }

}

/* GAME STAND */
const standGame = () => {

    if(hasBlackJack === false && isAlive === true) {
        
        let crupSecondCard = getRandomCard();
        allCrupierCards.push(crupSecondCard);
        crupSum += crupSecondCard
        crupierEl.textContent = crupSum;
        csumEl.textContent = crupSum

    }

    if(crupSum <= 17) {
        let crupThirdCard = getRandomCard()
        allCrupierCards.push(crupThirdCard)
        crupSum += crupThirdCard
        crupierEl.textContent += crupSum
        csumEl.textContent = crupSum

    }

    if(crupSum < 20) {
        let crupFourthCard = getRandomCard()
        allCrupierCards.push(crupFourthCard)
        crupSum += crupFourthCard
        crupierEl.textContent += crupSum
        csumEl.textContent = crupSum

    }

    crupierEl.textContent = ''
    for(i=0; i<allCrupierCards.length; i++) {
        crupierEl.textContent += allCrupierCards[i] + ' ' 
    }

    if(sum > crupSum) {
        message = 'Ganaste!!!'
        hasBlackJack = true
    }else if(crupSum > 21) {
        message = 'Ganaste!!!'
        isAlive = true
    }else{
        message = 'Perdiste'
        isAlive = false
    }
    messageEl.textContent = message

}

/* GAME RESET */
const resetGame = () => {
    messageEl.textContent = 'Comenzamos!!!'
    cardsEl.textContent = ''
    sumEl.textContent = ''
    playerEl.textContent = player.name + ': $ ' + player.chips
    allCards = []
    sum = 0
    allCrupierCards = []
    crupSum = 0
    crupierEl.textContent = ''
    csumEl.textContent = ''

}

/* EVENT´S */
startBtn.addEventListener('click', startGame);
ncardEl.addEventListener('click', newCard);
standBtn.addEventListener('click', standGame);
resetBtn.addEventListener('click', resetGame);