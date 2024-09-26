const registerChoice = document.getElementById('registerChoice');
const signInChoice = document.getElementById('signInChoice');
const userNameInputDiv = document.getElementById('userNameInput');
const  loginSubmit= document.getElementById('loginSubmit');
const registerSubmit = document.getElementById('registerSubmit');
const confirmPassword = document.getElementById('confirmPassword');

registerChoice.addEventListener('click', function() {
    loginSubmit.style.display = 'none';
    registerSubmit.style.display = 'block';
    registerChoice.style.display = 'none';
    signInChoice.style.display = 'block';
});

signInChoice.addEventListener('click', function() {
    loginSubmit.style.display = 'block';
    registerSubmit.style.display = 'none';
    registerChoice.style.display = 'block';
    signInChoice.style.display = 'none';
});