const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const phoneInput = document.querySelector('#phone');
const message = document.querySelector('#message');
const errorMsg = document.querySelector('.errorMsg');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    if (nameInput.value === '' || emailInput.value === '' || phoneInput.value === '' || message.value === '') {
        errorMsg.classList.add('error');
        errorMsg.innerHTML = 'Please enter all fields';
        setTimeout(() => errorMsg.remove(), 3000);
    } else {
        console.log(nameInput.value);
        console.log(emailInput.value);
        console.log(phoneInput.value);
        console.log(message.value);
    }
}