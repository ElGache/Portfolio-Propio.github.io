const hamburguesa = document.querySelector(".icono")
const menu = document.querySelector(".menu")

hamburguesa.addEventListener("click", e=>{
    hamburguesa.classList.toggle("active")
    menu.classList.toggle("active")
})