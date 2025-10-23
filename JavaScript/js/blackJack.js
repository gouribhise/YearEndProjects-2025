let start=document.getElementById('startBtn');
let newCard=document.getElementById('newCardBtn');
let cards=document.getElementById('cards');
let sum=document.getElementById('sum');
let message=document.getElementById('message');
 message.style.color="white"

let total=0;
let card=0;
let isAlive=true

start.addEventListener('click',function(){
    console.log('new game started')
    cards.textContent="Your Cards: ";
    sum.textContent="Total: ";
    total=0;
    card=0;
    isAlive=true
    newCard.disabled=false;
    message.textContent="Click 'Start Game' To Begin"
    message.style.color="white"
})

newCard.addEventListener('click', function(){
    let ans = getRandomCard();
    cards.textContent += " " + ans;
    total += ans;
    sum.textContent = "Total: " + total;

    if(total < 21){
        message.textContent = "Do you want to draw a new card?";
        message.style.fontSize="1rem"
        

    } else if(total === 21){
        message.textContent = "You've got a BlackJack!";
        newCard.disabled = true;
        message.style.fontSize="4rem"
         
    } else {
        message.textContent = "You're out of the game!";
        newCard.disabled = true;
        message.style.fontSize="1.5rem"
        message.style.color="red"

    }
});


function getRandomCard(){
    let randomNum=Math.floor(Math.random()*13)+1;
    if(randomNum>10) return 10
    else if (randomNum===1) return 11
    else return randomNum
}

 