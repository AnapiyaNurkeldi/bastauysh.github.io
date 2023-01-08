'use strict';
const login = document.querySelector('.login');
const password = document.querySelector('.password');
const btn = document.querySelector('.btn');

if (login.value == 'nazgulim' && password.value == "11112005") {
    btn.addEventListener('click', () => {
        // window.location.href = './main.html';
        alert('21312');
    });
   
} else if (login.value !== 'nazgulim' && password.value !== "11112005") {
    // alert('Логин немесе құпиясөзде қате бар!');
}
