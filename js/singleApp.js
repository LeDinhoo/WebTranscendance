document.addEventListener('DOMContentLoaded', function() {
    const loginSection = document.getElementById('loginSection');
    const gameSection = document.getElementById('gameSection');
    const loginForm = document.getElementById('loginForm');
    const userNameInput = document.getElementById('userNameInput');
    const usernameField = document.getElementById('username');
    const registerChoice = document.getElementById('registerChoice');
    const signInChoice = document.getElementById('signInChoice');
    const myText = document.getElementById('myText');
    const loginSubmit = document.getElementById('loginSubmit');
    const registerSubmit = document.getElementById('registerSubmit');
    const confirmPassword = document.getElementById('confirmPassword');

    let isRegistering = false;

    console.log('loginSection:', loginSection);
    console.log('gameSection:', gameSection);
    console.log('loginForm:', loginForm);

    loginSection.style.display = 'block';

    function toggleRegistrationMode(registering) {
        isRegistering = registering;
        userNameInput.classList.toggle('visible', registering);
        confirmPassword.classList.toggle('visible', registering);
        myText.textContent = registering ? 'Create an Account' : 'Join the Battle';
        loginSubmit.style.display = registering ? 'none' : 'block';
        registerSubmit.style.display = registering ? 'block' : 'none';
        
        // Ajuster la validation du champ username
        if (registering) {
            usernameField.setAttribute('required', '');

        } else {
            usernameField.removeAttribute('required');
        }
    }

    registerChoice.addEventListener('click', function() {
        toggleRegistrationMode(true);
    });

    signInChoice.addEventListener('click', function() {
        toggleRegistrationMode(false);
    });

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        console.log('Email:', email);
        console.log('Password:', password);

        if (isRegistering) {
            const username = usernameField.value;
            console.log('Username:', username);
            console.log('Inscription en cours...');
            // Logique d'inscription ici
        } else {
            if (email === "user@admin.com" && password === "password") {
                console.log('Login réussi');
                loginSection.style.display = 'none';
            } else {
                console.log('Login échoué');
                alert("Nom d'utilisateur ou mot de passe incorrect");
            }
        }
    });

    // Initialisation
    toggleRegistrationMode(false);
});