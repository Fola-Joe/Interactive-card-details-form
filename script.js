const name = document.querySelector('#name');
const cardNumber = document.querySelector('#card-num');
const month = document.querySelector('#month');
const year = document.querySelector('#year');
const cvc = document.querySelector('#cvc');

const submit = document.querySelector('#submit');
const continueBtn = document.querySelector('#continue');

const completedPage = document.querySelector('.completed');
const firstPage = document.querySelector('.input-details');

submit.addEventListener('click', function() {
    completedPage.style.display = 'block';
    firstPage.style.display = 'none';
})

continueBtn.addEventListener('click', function(){
    completedPage.style.display = 'none';
    firstPage.style.display = 'block';
})