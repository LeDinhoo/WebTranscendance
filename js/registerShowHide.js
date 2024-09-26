const loginWidget = document.getElementById("loginWidget");
const registerWidget = document.getElementById("registerWidget");
const signUpButton = document.getElementById("signUpButton");
const registerButton = document.getElementById("registerButton");

// Quand je clique sur register button le widget de login disparait et le widget de register apparait
registerButton.addEventListener("click", () => {
  loginWidget.style.display = "none";
  registerWidget.style.display = "flex";
});

// Quand je clique sur sign up button le widget de register disparait et le widget de login apparait
signUpButton.addEventListener("click", () => {
  loginWidget.style.display = "flex";
  registerWidget.style.display = "none";
});

// De base c'est loginwidget qui est affiche
registerWidget.style.display = "none";
