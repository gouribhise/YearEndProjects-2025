const slider=document.getElementById('lengthSlider');
const lengthDisplay=document.getElementById('lengthValue');

const firstInput=document.getElementById('first');
const secondInput=document.getElementById('second');
const btn=document.getElementById('ps-btn')

const lower = 'abcdefghijklmnopqrstuvwxyz';
const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789';
const symbols = '!@#$%^&*()-_=+[]{};:,.<>?/`~';

slider.addEventListener('input',function(){
    lengthDisplay.textContent=slider.value;
})

function generatePassword(){
    let chars=''

    //include characters as per checked checkboxes

    if(document.getElementById('chkLower').checked) chars+=lower;
    if(document.getElementById('chkUpper').checked) chars+=upper;
    if(document.getElementById('chkNumbers').checked) chars+=numbers;
    if(document.getElementById('chkSymbols').checked) chars+=symbols;

    if(chars==='')return ;

    let length=parseInt(slider.value);
    let password=''

    for(let i=0;i<length;i++){
        let index=Math.floor(Math.random()*chars.length);
        password+=chars[index]
    }
    return password;
}

//generate passwords on button click
btn.addEventListener('click',function(){
    firstInput.value=generatePassword();
    secondInput.value=generatePassword();
})
