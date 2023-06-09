const submit = document.querySelector('#submit');
const continueBtn = document.querySelector('#continue');

const completedPage = document.querySelector('.completed');
const firstPage = document.querySelector('.input-details');

const nameInput = document.querySelector('#name');
const nameField = document.querySelector('h2');

const cardNumInput = document.querySelector('#card-num');
const cardNum = document.querySelector('h1');

const monthInput = document.querySelector('#month');
const month = document.querySelector('.mm');

const yearInput = document.querySelector('#year');
const year = document.querySelector('.yy');

const cvcInput = document.querySelector('#cvc');
const cvc = document.querySelector('.cvc-content');


nameInput.addEventListener('keyup', function cardName(e){
    nameField.innerText = e.target.value;
});
cardNumInput.addEventListener('keyup', function cardNumber(e) {
    cardNum.innerText = (e.target.value);
});
monthInput.addEventListener('keyup', function monthNumber(e){
    month.innerText = e.target.value;
});
yearInput.addEventListener('keyup', function yearNumber(e){
    year.innerText = e.target.value;
});
cvcInput.addEventListener('keyup', function cvcNumber(e){
    cvc.innerText = e.target.value;
});


//Input events
nameInput.addEventListener('input', (e) => {
  const input = e.target.value;
  // Remove all non-letter characters
  const lettersOnly = input.replace(/[^a-zA-Z\s]/g, '');
  e.target.value = lettersOnly;
});
cardNumInput.addEventListener('input', (e) => {
    // Remove non-numeric characters
    const input = e.target.value.replace(/\D/g, ''); 
    // Add a space after every 4 digits
    let spacedInput = input.replace(/(.{4})/g, '$1 ');
    //to be able to use backspace
    if (e.inputType === 'deleteContentBackward') {
        spacedInput = spacedInput.substring(0, spacedInput.length - 1);
      }
    e.target.value = spacedInput;
});
monthInput.addEventListener('input', (e) => {
  const input = e.target.value;
  const numbersOnly = input.replace(/[^0-9]/g, '');
  e.target.value = numbersOnly;
});
yearInput.addEventListener('input', (e) => {
  const input = e.target.value;
  const numbersOnly = input.replace(/[^0-9]/g, '');
  e.target.value = numbersOnly;
});
cvcInput.addEventListener('input', (e) => {
  const input = e.target.value;
  const numbersOnly = input.replace(/[^0-9]/g, '');
  e.target.value = numbersOnly;
});


//Submit event
const inputs = document.querySelectorAll('input');
submit.addEventListener('click', function btnSubmit(e) {
    e.preventDefault();
    const nameError = document.querySelector('.error-1');
    if (!nameInput.value){
        nameError.classList.add('err-msg');
        inputs[0].classList.add('input-err');
    } else if (nameInput.value) {
        nameError.classList.remove('err-msg');
        inputs[0].classList.remove('input-err');
    }

    const numError = document.querySelector('.error-2-2');
    const numError2 = document.querySelector('.error-2');
    const value = cardNumInput.value.trim();
    if (!cardNumInput.value){
        numError.classList.add('err-msg');
        inputs[1].classList.add('input-err');
    } else if (value.length < 19) {
        numError2.classList.add('err-msg');
        inputs[1].classList.add('input-err')
    }
    else {
        numError.classList.remove('err-msg');
        numError2.classList.remove('err-msg');
        inputs[1].classList.remove('input-err');
    }

    const monthError = document.querySelector('.error-3');
    const monthError3 = document.querySelector('.error-3-3');
    if (!monthInput.value){
        monthError.classList.add('err-msg');
        inputs[2].classList.add('input-err');
    } else if (monthInput.value > 13){
        monthError3.classList.add('err-msg');
        inputs[2].classList.add('input-err');
    } 
    else {
        monthError.classList.remove('err-msg');
        inputs[2].classList.remove('input-err');
        monthError3.classList.remove('err-msg');
    }

    const yearError = document.querySelector('.error-3');
    if (!yearInput.value){
        yearError.classList.add('err-msg');
        inputs[3].classList.add('input-err');
    } else {
        yearError.classList.remove('err-msg');
        inputs[3].classList.remove('input-err');
    }

    const cvcError = document.querySelector('.error-4');
    if (!cvcInput.value){
        cvcError.classList.add('err-msg');
        inputs[4].classList.add('input-err');
    } else {
        cvcError.classList.remove('err-msg');
        inputs[4].classList.remove('input-err');
    }

    if (nameInput.value && cardNumInput.value && monthInput.value < 13 && yearInput.value && cvcInput.value && value.length == 19){
        completedPage.style.display = 'block';
        firstPage.style.display = 'none';
    }
})

continueBtn.addEventListener('click', function(){
    completedPage.style.display = 'none';
    firstPage.style.display = 'block';
    nameInput.value = '';
    cardNumInput.value = '';
    monthInput.value = '';
    yearInput.value = '';
    cvcInput.value = '';
})