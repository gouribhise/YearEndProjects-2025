var deck;
window.onload=function(){
    buildDeck();
    shuffleDeck();
}

function buildDeck(){
    let values=["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
    let types=["C","D","H","S"];
    deck=[];
    for(let i=0;i<types.length;i++){
        for(let j=0;j<values.length;j++){
            deck.push(values[j]+"-"+types[i])
        }
    }
    console.log(deck)
 }

 function shuffleDeck(){
    for(let i=0;i<deck.length;i++){
        let j=Math.floor(Math.random()*deck.length)
        let temp=deck[i];
        deck[i]=deck[j];
        deck[j]=temp;
    }
    console.log(deck)
 }
var hit_btn=document.getElementById('hit')
var stay_btn=document.getElementById('stay')


hit_btn.addEventListener('click',function(){
    console.log('hit pressed')
})

stay_btn.addEventListener('click',function(){
    console.log('stay pressed')
})