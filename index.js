const hamburguesa_menu = document.querySelector(".hamburguesa-menu")
const navegacion = document.querySelector(".navegacion")

hamburguesa_menu.addEventListener("click", () => {    
    navegacion.classList.toggle("mostrar")
    hamburguesa_menu.classList.toggle("girar")
});