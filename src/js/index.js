// Saudacao ao usuario
user_name = document.querySelector('.saudacao')

user_name.innerHTML += 'Vitor'

// abertura do menu
const menu = document.querySelector('#menu')

function openMenu() {
    menu.style.width = "40%"
}

// fechamento do menu
function closeMenu() {
    menu.style.width = "0"
}