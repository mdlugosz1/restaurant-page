import {loadInitialPage} from './initial-page'
import {createHomeContent} from './home'
import {createContact} from './contact'
import {createMenu} from './menu'


loadInitialPage(createHomeContent());

const buttons = document.querySelectorAll('li');
const contentSpace = document.querySelector('.tab');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        contentSpace.innerHTML = '';
        if (button.textContent === 'home') {
            contentSpace.appendChild(createHomeContent());
        } else if (button.textContent === 'menu') {
            contentSpace.appendChild(createMenu());
        } else {
            contentSpace.appendChild(createContact());
        }
    })
})

