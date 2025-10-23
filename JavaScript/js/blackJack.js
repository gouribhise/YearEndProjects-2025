let start=document.getElementById('startBtn');
let newCard=document.getElementById('newCardBtn');
let cards=document.getElementById('cards');
let sum=document.getElementById('sum');
let message=document.getElementById('message');

let total=0;
let card=0;
let isAlive=true

start.addEventListener('click',function(){
    console.log('new game started')
    cards.textContent="Your Cards: "+0;
    sum.textContent="Total: "+0;
    total=0;
    card=0;
    isAlive=true
    newCard.disabled=false;
})

newCard.addEventListener('click',function(){
    console.log('draw new card')
    let ans=0;
    ans=getRandomCard()
    cards.textContent+=" "+ans;
    total+=ans
    sum.textContent="Sum: "+total;
    if(total>21){
        isAlive=false;
        if(isAlive==false){
            console.log(isAlive)
            newCard.disabled=true;  
        }
        

    }
    console.log(ans,total)

})


function getRandomCard(){
    let randomNum=Math.floor(Math.random()*13)+1;
    if(randomNum>10) return 10
    else if (randomNum===1) return 11
    else return randomNum
}

 