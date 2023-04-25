const submit = document.querySelector('#submit');
const continueBtn = document.querySelector('#continue');

const completedPage = document.querySelector('.completed');
const firstPage = document.querySelector('.input-details');

// submit.addEventListener('click', function() {
//     completedPage.style.display = 'block';
//     firstPage.style.display = 'none';
// })

continueBtn.addEventListener('click', function(){
    completedPage.style.display = 'none';
    firstPage.style.display = 'block';
})

// const name = document.querySelector('#name');
// const cardNumber = document.querySelector('#card-num');
const month = document.querySelector('#month');
const year = document.querySelector('#year');
const cvc = document.querySelector('#cvc');


    function nameFunc() {
        const nameInput = document.querySelector('#name').value;
        if (nameInput === ''){
            const error1Msg = document.querySelector('.error-1');
            error1Msg.style.display = 'block'
        }
    }
    nameFunc();

    let letters = /^[A-Za-z]+$/;
    function allLetter(inputtxt){ 
      if(inputtxt.value.match(letters) === false){
        const errorMsg1 = document.querySelector('.error-1-1');
        errorMsg1.style.display = 'block';
      }
    }
    allLetter(inputtxt);

    function CardNumFunc(){
        const cardNum = document.querySelector('#card-num').value;
        if (cardNum === ''){
            const errorMsg2 = document.querySelector('.error-2-2');
            errorMsg2.style.display = 'block';
        }
        // if (cardNum.match(letters) === true){
        //     const error2Msg = document.querySelector('.error-2');
        //     error2Msg.style.display =  'block';
        // }
    }
    CardNumFunc();

    function MonthYearFunc(){
        const monthValue = document.querySelector('#month').value;
        const yearValue = document.querySelector('#year').value;
        if (monthValue === '' && yearValue === '') {
            const error3Msg = document.querySelector('.error-3');
            error3Msg.style.display = 'block';
        }
    }
    MonthYearFunc();

    function cvcFunc() {
        const cvcValue = document.querySelector('#cvc').value;
        if (cvcValue === ''){
            const error4Msg = document.querySelector('.error-4');
            error4Msg.style.display = 'block';
        }
    }
    cvcFunc();


submit.addEventListener('click', function() {
    // Validation();
    nameFunc();
    allLetter(inputtxt);
    CardNumFunc();
    MonthYearFunc();
    cvcFunc();

    const errorMsg = document.querySelector('.error-msg');
    if (errorMsg.style.display === false){
        completedPage.style.display = 'block';
        firstPage.style.display = 'none';
    }
})