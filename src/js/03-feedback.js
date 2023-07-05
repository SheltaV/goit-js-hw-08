const throttle = require('lodash.throttle');
const form = document.querySelector('.feedback-form');
const email = document.querySelector('input');
const message = document.querySelector('textarea');

form.addEventListener('input', throttle(onInput, 500));
form.addEventListener('submit', onSubmit);


function toInput() {
    const objValues = JSON.parse(localStorage.getItem('feedback-form-state'))
    if (!objValues) {
       email.value = '';
        message.value = '';
        console.log('')
    } else {
        email.value = objValues.email;
        message.value = objValues.message;
    }
}
toInput()

function onInput() {
    const values = {
        email: email.value,
        message: message.value
    }
    localStorage.setItem('feedback-form-state', JSON.stringify(values))
}

function onSubmit(event) {
    event.preventDefault();
    if (email.value && message.value) {
        console.log(JSON.parse(localStorage.getItem('feedback-form-state')))
    localStorage.clear();
    email.value = '';
    message.value = '';
    }
}