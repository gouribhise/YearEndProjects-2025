let first=document.getElementById('first')
let second=document.getElementById('second')
let btn=document.getElementById('ps-btn')

const chars=[
   
    'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
   
    'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
  
    '0','1','2','3','4','5','6','7','8','9'
]

function getRandomChars(length=12){
    let pass=[]
    for(let i=0;i<=length;i++){
        let index=Math.floor(Math.random()*chars.length)
        pass.push(chars[index])
    }
    return pass.join('')
}

btn.addEventListener('click',function(){
    first.value=getRandomChars()
    second.value=getRandomChars()
})

 
