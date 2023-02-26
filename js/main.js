'use strict'

const tabItem = document.querySelectorAll('.tabs__btn-item');
const tabContent = document.querySelectorAll('.tabs__content-item');

tabItem.forEach(function (element){
   element.addEventListener('click', open);
});

function open(evt){
    const tabTarget = evt.currentTarget;
    const button = tabTarget.dataset.button;
    tabItem.forEach(function (item){
       item.classList .remove('tabs__btn-item--active');
    });

    tabContent.forEach(function (item){
       item.classList.remove('tabs__content-item--active');
    });

    tabTarget.classList.add('tabs__btn-item--active');
    document.querySelector(`#${button}`).classList.add('tabs__content-item--active');
}

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('menu--active');
});

// Проверка формы на ввод email:
// 1. При вводе email GO подсвечивается зелёным иначе красный цвет!!! Используется jquery 2.1.1
const validateEmail = (email) => {
    return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const validate = () => {
    const $result = $('#result');
    const email = $('#email').val();
    // $result.text('');

    if (validateEmail(email)) {
        // $result.text(email + ' is valid :)');
        $result.css('color', 'green');
    } else {
        // $result.text(email + ' is not valid :(');
        $result.css('color', 'red');
    }
    return false;
}

$('#email').on('input', validate);



