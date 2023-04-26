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

// functions
function cardNumber(e) {
    cardNum.innerText = format(e.target.value);
}
function cardName(e){
    nameField.innerText = e.target.value;
}
function monthNumber(e){
    month.innerText = e.target.value;
}
function yearNumber(e){
    year.innerText = e.target.value;
}
function cvcNumber(e){
    cvc.innerText = e.target.value;
}

function format(str){
    return str.toString().replace(/\d{4}(?=.)/g,"$&");
}

nameInput.addEventListener('keyup', cardName);
cardNumInput.addEventListener('keyup', cardNumber);
monthInput.addEventListener('keyup', monthNumber);
yearInput.addEventListener('keyup', yearNumber);
cvcInput.addEventListener('keyup', cvcNumber);

const inputs = document.querySelectorAll('input');

submit.addEventListener('click', function btnSubmit(e) {
    e.preventDefault();
    if (!nameInput.value){
        const nameError = document.querySelector('.error-1');
        nameError.classList.add('err-msg');
        inputs[0].classList.add('input-err');
    } else {
        nameError.classList.remove('err-msg');
        inputs[0].classList.remove('input-err');
    }
    if (!cardNumInput.value){
        const numError = document.querySelector('.error-2-2');
        numError.classList.add('err-msg');
        inputs[1].classList.add('input-err');
    } else {
        numError.classList.remove('err-msg');
        inputs[1].classList.remove('input-err');
    }
    if (!monthInput.value){
        const monthError = document.querySelector('.error-3');
        monthError.classList.add('err-msg');
        inputs[2].classList.add('input-err');
    } else {
        monthError.classList.remove('err-msg');
        inputs[2].classList.remove('input-err');
    }
    if (!yearInput.value){
        const yearError = document.querySelector('.error-3');
        yearError.classList.add('err-msg');
        inputs[3].classList.add('input-err');
    } else {
        yearError.classList.remove('err-msg');
        inputs[3].classList.remove('input-err');
    }
    if (!cvcInput.value){
        const cvcError = document.querySelector('.error-4');
        cvcError.classList.add('err-msg');
        inputs[4].classList.add('input-err');
    } else {
        cvcError.classList.remove('err-msg');
        inputs[4].classList.remove('input-err');
    }
})

continueBtn.addEventListener('click', function(){
    completedPage.style.display = 'none';
    firstPage.style.display = 'block';
})

