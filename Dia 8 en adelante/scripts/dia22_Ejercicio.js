let mas = document.querySelector("#mas");
let modal = document.querySelector("#modal");
let cerrar = document.querySelector("#cerrar");
let agregar = document.querySelector("#agregar");

mas.addEventListener("click", () => {
    modal.classList.toggle("hidden");
    console.log("Opening modal");
})

cerrar.addEventListener("click", () => {
    modal.classList.toggle("hidden");
    console.log("Closing modal");
})

agregar.addEventListener("click", () => {
    modal.classList.toggle("hidden");
    console.log("Closing modal and adding contact");
})



// ########################################

const inputName = document.querySelector("#nombre") // llama a el id nombre
const inputEmail = document.querySelector("#email") // llama al id email
const inputPhone = document.querySelector("#telefono") // llama al id telefono
const info = document.querySelector("#info") // llama al id info

let contacts = [] // crea una array vacia
// Show all contacts already saved 
window.addEventListener("DOMContentLoaded", () => { // quitar esto ########  
//hace que cargue cuando ya corrio el html y el dom 
    const saved = localStorage.getItem("contacts") // crea una const saved y luego el valor es lo que se busca en el navegador dentro de local storege si hay alguno en contacts
    if (saved) { // si el valor es truthy ejecuta
        contacts = JSON.parse(saved); // convierte el string en su estructura original (objeto o array)
        createList (); // llama a la otra funcion que crea la lista
    }
})

// Add new contacts
agregar.addEventListener("click", () => { // al hacer click en agregar se ejecuta lo de adentro
    if (inputName.value.trim() === "" || inputName.value.trim() === "" || inputPhone.value.trim() === "") { // valida si el campo ingresado esta vacio si lo esta retorna
        // ################# corregir inputName que esta dos veces
        return; // retorna si el campo esta vacio
    }
    const newContact = { // creacion de el objeto
        name: inputName.value, // se crea el name con los valores , value hace que se asigne el valor dado
        email: inputEmail.value, // crea el email con los valores
        phone: inputPhone.value, // crea el phone con los valores
    }
    contacts.push(newContact)  // agrega el codigo en el ultimo lugar de el array
    localStorage.setItem("contacts", JSON.stringify(contacts)) // localstorage.setItem: guarda en el navegador, recibe 2 parametros ,el primero el nombre y el segundo el valor, pero como no puede almacenar objects o arrays, JSON.stringify lo convierte a string

    inputName.value = ""  // hace que el valor quede vacio luego de usarce
    inputEmail.value = ""  // hace que el valor quede vacio luego de usarce
    inputPhone.value = ""// hace que el valor quede vacio luego de usarce
    
    createList () // llama a la otra funcion
})



function createList () { // nueva funcion
    info.innerHTML = "" // hace que info.innerHTML quede vacio antes de empezar la funcion
    contacts.forEach(contact => { // corre una vez por cada objeto guardado en el array
        info.innerHTML += ` 
        <div class="bg-gray-200 hover:bg-[#c9e1ff]">
            <p>${contact.name}</p>
            <div class="flex gap-4">
                <p>${contact.email}</p>
                <p>${contact.phone}</p>
            </div>
        </div>
        `; // agrega el codigo a la pagina 
    })
}

/*


let mas = document.querySelector("#mas");
let modal = document.querySelector("#modal");
let cerrar = document.querySelector("#cerrar");
let agregar = document.querySelector("#agregar");

mas.addEventListener("click", () => {
    modal.classList.toggle("hidden");
    console.log("Opening modal");
})

cerrar.addEventListener("click", () => {
    modal.classList.toggle("hidden");
    console.log("Closing modal");
})

agregar.addEventListener("click", () => {
    modal.classList.toggle("hidden");
    console.log("Closing modal and adding contact");
})



// ########################################

const inputName = document.querySelector("#nombre")
const inputEmail = document.querySelector("#email")
const inputPhone = document.querySelector("#telefono")
const info = document.querySelector("#info")

let contacts = []
// Show all contacts already saved 
const saved = localStorage.getItem("contacts")
if (saved) {
    contacts = JSON.parse(saved);
    createList ();
}

// Add new contacts
agregar.addEventListener("click", () => {
    if (inputName.value.trim() === "" || inputEmail.value.trim() === "" || inputPhone.value.trim() === "") {
        return;
    }
    const newContact = {
        name: inputName.value,
        email: inputEmail.value,
        phone: inputPhone.value,
    }
    contacts.push(newContact)
    localStorage.setItem("contacts", JSON.stringify(contacts))

    inputName.value = "" 
    inputEmail.value = "" 
    inputPhone.value = ""
    
    createList ()
})


// create the contact per each data entered
function createList () {
    info.innerHTML = ""
    contacts.forEach(contact => {
        info.innerHTML += ` 
        <div class="contactBox bg-gray-200 hover:bg-[#c9e1ff] rounded-lg">
            <p class="p-2">${contact.name}</p>
                <p class="contactInfo hidden gap-4 p-2">${contact.email} - ${contact.phone}</p>
        </div>
        `;
    })
}


// Add event listener to each contact
let contactBox = document.querySelectorAll(".contactBox")
let contactInfo = document.querySelectorAll(".contactInfo")

contactBox.forEach((box, i) => {
    box.addEventListener("click", () => {
    contactInfo[i].classList.toggle("hidden")
    })
});
    
*/