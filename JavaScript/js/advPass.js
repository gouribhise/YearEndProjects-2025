const slider=document.getElementById('lengthSlider');
const lengthDisplay=document.getElementById('lengthValue');

const lower = 'abcdefghijklmnopqrstuvwxyz';
const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789';
const symbols = '!@#$%^&*()-_=+[]{};:,.<>?/`~';

slider.addEventListener('input',function(){
    lengthDisplay.textContent=slider.value;
})