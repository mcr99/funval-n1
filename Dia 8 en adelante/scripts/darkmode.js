let htmldoc = document.querySelector("#html");
let btnDarkmode = document.querySelector("#darkMode");

btnDarkmode.addEventListener("click", cambiarDarkmode)

function cambiarDarkmode() {
    htmldoc.classList.toggle("dark")
}