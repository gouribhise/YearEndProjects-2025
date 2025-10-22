const slider = document.getElementById('lengthSlider');
const lengthDisplay = document.getElementById('lengthValue');
const firstInput = document.getElementById('first');
const secondInput = document.getElementById('second');
const btn = document.getElementById('ps-btn');
const firstStr = document.getElementById('firstStr');
const secondStr = document.getElementById('secondStr');

const lower = 'abcdefghijklmnopqrstuvwxyz';
const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789';
const symbols = '!@#$%^&*()-_=+[]{};:,.<>?/`~';

// Update password length text when slider moves
slider.addEventListener('input', function () {
  lengthDisplay.textContent = slider.value;
});

// Generate password
function generatePassword() {
  let chars = '';

  if (document.getElementById('chkLower').checked) chars += lower;
  if (document.getElementById('chkUpper').checked) chars += upper;
  if (document.getElementById('chkNumbers').checked) chars += numbers;
  if (document.getElementById('chkSymbols').checked) chars += symbols;

  if (chars === '') return '';

  let length = parseInt(slider.value);
  let password = '';

  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * chars.length);
    password += chars[index];
  }

  return password;
}

// Check password strength
function checkStrength(password, targetElement) {
  let score = 0;

  if (password.length >= 8) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;

  targetElement.classList.remove('weak', 'medium', 'strong');

  if (password.length === 0) {
    targetElement.textContent = 'None';
  } else if (score <= 1) {
    targetElement.textContent = 'Weak';
    targetElement.classList.add('weak');
  } else if (score === 2 || score === 3) {
    targetElement.textContent = 'Medium';
    targetElement.classList.add('medium');
  } else if (score === 4) {
    targetElement.textContent = 'Strong';
    targetElement.classList.add('strong');
  }
}

// Generate passwords on click
btn.addEventListener('click', function () {
  const pass1 = generatePassword();
  const pass2 = generatePassword();

  firstInput.value = pass1;
  secondInput.value = pass2;

  checkStrength(pass1, firstStr);
  checkStrength(pass2, secondStr);
});


//copy passwords
function copyPassword(inputId){
  const input=document.getElementById(inputId);
  input.select();
  input.setSelectionRange(0,99999);
  navigator.clipboard.writeText(input.value)
      .then(()=>alert("Password Copied!!"))
      .catch(err=>alert("Failed To Copy Password!!"))

}