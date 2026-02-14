/*

function cicleArea(radio) {
    let area = (Math.PI *(radio)**2)
    return area
}

console.log(cicleArea(5))

*/

do {
    let order = parseInt(prompt(`
        Ingresa:
        1- 🥪 Hamburguesas:
        2- 🍕 Pizzas
        3- 🍟 Acompañamientos
        4- 🥤 Bebidas
        5- 🍨 Postres
                `))
            switch (order) {
                case 1 :
                    hamburgerList()
                    break;
                case 2 :
                    break;
                case 3 : 
                    break;
                case 4 :
                    break;
                case 5 : 
                    break;
                default: 
                    alert(`Opcion Incorrecta`)
            }
        } while (1<2);


function hamburgerList() {
    let hamburger = parseInt(prompt(`
        1-  Hamburguesa Clásica – S/ 12
            Pan, carne, lechuga y salsa especial
        --------------------------------------
        2-  Hamburguesa con Queso – S/ 14
            Carne, queso, lechuga y tomate
        --------------------------------------
        3-  Hamburguesa Doble – S/ 18
            Doble carne, queso y salsa especial
        --------------------------------------
        `))
}

function pizzaList(){
    prompt(`
        4-  Pizza Personal – S/ 18
            Queso y salsa de tomate
        --------------------------------------
        5-  Pizza Pepperoni – S/ 22
            Queso, pepperoni y salsa
        --------------------------------------
        6-  Pizza Suprema – S/ 25
            Queso, carnes y verduras
        --------------------------------------
        `)
}

function accompanimentList(){
    prompt(`
        7-  Papas Fritas Pequeñas – S/ 5
        --------------------------------------
        8-  Papas Fritas Medianas – S/ 7
        --------------------------------------
        9-  Papas Fritas Grandes – S/ 9
        --------------------------------------
        `)
}

function drinkList(){
    prompt(`
        10- Gaseosa – S/ 5
        --------------------------------------
        11- Agua – S/ 4
        --------------------------------------
        12- Jugo Natural – S/ 6
        --------------------------------------
        `)
}

function dessertList(){
    prompt(`        
        13- Helado – S/ 6
        --------------------------------------
        14- Brownie – S/ 7`)
}