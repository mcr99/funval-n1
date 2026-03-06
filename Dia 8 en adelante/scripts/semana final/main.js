/**
 * Aquí estará la lógica principal de la aplicación.
 * Este bloque de código contiene la funcionalidad principal
 * que define el comportamiento del programa.
 */

// Import functions from  utils.js 
import { activeToggleModal, modalSearch, createCard, getLocation, selectguests, filterStays, locationContainer, activeDataLocationArea} from "./utils"

// Import array from stays.js
import {stays} from "./stays"


// open and close toggle with difetent options
let searchMain = document.querySelector("#search_main") // get an id from html

searchMain.addEventListener("click", () => { //click to active event listener and active function
    activeToggleModal()
})


let closeButtonModal = document.querySelector("#close_button__modal")

closeButtonModal.addEventListener("click", () => {
    activeToggleModal()
})


modalSearch.addEventListener("click", () => {
    activeToggleModal()
})


let modalSearchForm = document.querySelector("#modal_search__form")

modalSearchForm.addEventListener("click", (e) => {
    e.stopPropagation()
})


let buttonSearchModal = document.querySelector("#button_search_modal")

buttonSearchModal.addEventListener("click", () => {
    activeToggleModal()
})


// Getting all cards when you just get on the page 
stays.forEach(element => {
    createCard(element)
});


//add event listener to active the filters

let inputLocation = document.querySelector("#input_location")

inputLocation.addEventListener("input", (e) => {
    let result1 = e.target.value // guarda cambios que se hacen en tiempo real tal cual se escribe
    let result2 = e.target.value.toLowerCase() // guarda cambios en tiempo real en minuscula 
    getLocation(result2, result1)
    filterStays(result2, counterAdult + counterChildren)
})


// change amount of guests needed 

let lessAdult = document.querySelector("#less_adult")
let moreAdult = document.querySelector("#more_adult")
let lessChildren = document.querySelector("#less_children")
let moreChildren = document.querySelector("#more_children")

let counterAdult = 0

// adult amount
lessAdult.addEventListener("click", () => {
    if(counterAdult > 0 ){
    counterAdult --
    selectguests(counterAdult, counterChildren)
    filterStays(inputLocation.value, counterAdult + counterChildren)
    }
})

moreAdult.addEventListener("click", ()=> {
    counterAdult ++
    selectguests(counterAdult, counterChildren)
    filterStays(inputLocation.value, counterAdult + counterChildren)
})

let counterChildren = 0

// children amount
lessChildren.addEventListener("click", () => {
    if(counterChildren > 0 ){
    counterChildren --
    selectguests(counterAdult, counterChildren)
    filterStays(inputLocation.value, counterAdult + counterChildren)
    }
})

moreChildren.addEventListener("click", ()=> {
    counterChildren ++
    selectguests(counterAdult, counterChildren)
    filterStays(inputLocation.value, counterAdult + counterChildren)
})


// add event listener to filter and update info in the input and button

locationContainer.addEventListener("click", (e) => { // se le da el evento al contenedor padre para que escuche cualquier click que se haga dentro de el 
    let item = e.target.closest(".location_option") // cuando se da click busca el contenedor mas cercano que tenga esa clase
    if(item) { //filtro de seguridad par que no se rompa si preciona en un espacio vacio (que no sea el icono o el nombre y ciudad)
        let option = item.getAttribute("data-city") // hace que option tenga el valor del atributo data-city
        inputLocation.value = option // escribe el nombre de la ciudad automaticamente en el input
    
        let addLocationButton = document.querySelector("#add_location__button") // cambia texto en el boton al lugar de add location
        if(addLocationButton) { // hace que cambie el texto del boton
            addLocationButton.textContent = option
        }
        filterStays(option, counterAdult + counterChildren) // llama a la funcion
        locationContainer.innerHTML = `` // limpia el contenedor para otro uso
    }
    
})


// Adding option to hide the guest options 

let guestOption = document.querySelector("#guest_option")

guestOption.addEventListener("click", ()=> {
    activeDataLocationArea()
})



