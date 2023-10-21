if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.documentElement.setAttribute('data-theme', "dark");
} else {
  document.documentElement.setAttribute('data-theme', "light");
}
window.matchMedia('(prefers-color-scheme: dark)')
  .addEventListener('change', event => {
    if (event.matches) {
      //dark mode
      document.documentElement.setAttribute('data-theme', "dark")
    } else {
      //light mode
      document.documentElement.setAttribute('data-theme', "light");
    }
  })

  //Obtener el boton toggle
var toggleButton = document.getElementById("toggle-button");

//Agregar un evento click al boton toggle
toggleButton.addEventListener("click", function() {
// Obtener el elemento body
var body = document.querySelector("body");

// Revisar si el elemento body tiene la clase "dark-mode"
if (body.classList.contains("dark-mode")) {
  // Remover la clase "dark-mode" del elemento body
  body.classList.remove("dark-mode");
  // Cambiar el texto del botón toggle
  toggleButton.innerHTML = "Activar modo oscuro";
} else {
  // Agregar la clase "dark-mode" al elemento body
  body.classList.add("dark-mode");
  // Cambiar el texto del botón toggle
  toggleButton.innerHTML = "Activar modo claro";
}
});



function toggleMenu () {
  const menu = document.querySelector(".menu__link");
  const icon = document.querySelector(".hamburger__icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
