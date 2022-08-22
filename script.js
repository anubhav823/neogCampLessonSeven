let birthDate = document.querySelector('#date_of_birth')
let luckyNumber = document.querySelector('#lucky_number')
const submitButton = document.querySelector('#checkButton')
let result = document.querySelector("#result")

submitButton.addEventListener('click', () => {
    result.innerHTML = ''
    validateInputs(birthDate.value, luckyNumber.value)
    sumOfDigits(replaceHyphens(birthDate.value), luckyNumber.value);
})

function replaceHyphens(birthDate) {
    let replacedBirthDate = '';
    for (let i = 0; i < birthDate.length; i++) {
        if (birthDate[i] === '-') {

        } else {
            replacedBirthDate = replacedBirthDate + birthDate[i];
        }
    }
    return replacedBirthDate;
}

function sumOfDigits(replacedBirthDate, luckyNumber) {
    let sum = 0;
    let p = document.createElement('p');
    for (let i = 0; i < replacedBirthDate.length; i++) {
        sum = sum + Number(replacedBirthDate[i]);
    }
    if (sum % luckyNumber == 0) {
        p.innerText = 'Your birthday is lucky!'
    } else {
        p.innerText = 'Your birthday is not so lucky ;-('
    }
    result.appendChild(p);
}

function validateInputs(birthDate, luckyNumber) {
    let p = document.createElement('p')
    if (birthDate === '' || luckyNumber.length === 0) {
        p.innerText = 'Please enter both inputs'
        result.appendChild(p)
    }
    if (isNaN(luckyNumber)) {
        p.innerText = "Lucky number should be a number"
        result.appendChild(p)
    }
}