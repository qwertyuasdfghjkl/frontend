/*
done in main.js, but i did not want to delete that file
console.log(window);
alert(1);
*/

// single element selectors
console.log(document.getElementById('my-form'));
console.log(document.querySelector('.container'));

// multiple element selectors
console.log(document.querySelectorAll('.items'));

// looping through elements
const items = document.querySelectorAll('.item');
items.forEach((item) => console.log(item));

// changing things in the user interface (dom)
const ul = document.querySelector('.items');
// ul.remove();
// ul.lastElementChild.remove();
// ul.firstElementChild.textContent = 'Hello';
// ul.children[1].innerText = 'Brad';
// ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

// changing style
const btn = document.querySelector('.btn');
btn.style.background = 'red';

/*
//events
btn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('click');
    console.log(e.target.className);
    document.querySelector('#my-form').style.background = '#ccc';
    document.querySelector('body').classList.add('bg-dark');
    // document.querySelector('.items').lastElementChild.innerHTML='<h1>Hello</h1>';
});
*/

// functional form
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();
    if(nameInput.value === '' || emailInput.value === '') {
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';
        setTimeout(() => msg.remove(), 3000);
    } else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

        userList.appendChild(li);

        // clear fields
        nameInput.value = '';
        emailInput.value = '';

    }
}