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

submit.addEventListener('click', function btnSubmit(e) {
    e.preventDefault();

})

continueBtn.addEventListener('click', function(){
    completedPage.style.display = 'none';
    firstPage.style.display = 'block';
})

