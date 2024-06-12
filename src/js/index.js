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

function openForm(){
    document.querySelector("#form").style.display = "block";
}

function closeForm(){ 
    document.querySelector("#form").style.display = "none";
}

function saveData(){
    nome = document.querySelector('#card-name').value
    number = document.querySelector('#card-number').value
    cvv = document.querySelector('#cvv').value
    expiry = document.querySelector('#expiry').value
    cpf = document.querySelector('#cpf').value

    localStorage.setItem('nome', nome)
    localStorage.setItem('number', number)
    localStorage.setItem('cvv', cvv)
    localStorage.setItem('expiry', expiry)
    localStorage.setItem('cpf', cpf)
}

function loadData(){
    const name = localStorage.getItem('nome');
    const number = localStorage.getItem('number');
    const cvv = localStorage.getItem('cvv');
    const expiry = localStorage.getItem('expiry');
    const cpf = localStorage.getItem('cpf');

    if (name !== null) {
        document.getElementById('card-name').value = name;
    }
    if (number !== null) {
        document.getElementById('card-number').value = number;
    }
    if (cvv !== null) {
        document.getElementById('cvv').value = cvv;
    }
    if (expiry !== null) {
        document.getElementById('expiry').value = expiry;
    }
    if (cpf !== null) { 
        document.getElementById('cpf').value = cpf;
    }
}