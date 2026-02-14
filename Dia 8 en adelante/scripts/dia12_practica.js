// Indica si numero es 0 negativo o positivo

/*
let number = parseFloat(prompt("Por favor ingresa tu numero:"))

if(number === 0) {
    alert("Tu numero es Cero")
} else if(number >= 1) {
    alert("Tu numero es Positivo")
} else {
    alert("Tu numero es Negativo")
}

*/

// Indica si es mayor de edad ingresando el a~o de nacimiento

/*
let year = parseInt(prompt("Ingrese el año de nacimiento"))
let age = 2026 - year

if (age >= 18){
    alert("Eres Mayor de Edad 🧓")
} else if (age >= 14) {
    alert("Eres un Joven 👦🏻")
} else {
    alert("Eres un Niño 👶")
}

*/

// Indica descuento dependiendo de cantidad

/* 
Descuento en una tienda
Pide el monto de compra:
≥ 500 → 20% de descuento
≥ 300 → 10% de descuento
< 300 → sin descuento
Muestra el precio final.
 */

/*
let amount = parseFloat(prompt("Ingresa el monto de compra"))
let total

if (amount >= 500 ){
    alert("Tu descuento es de 20% ")
    let total = amount - (amount * 0.20) 
    alert("Total a Pagar:" + total)
} else if (amount >= 300 ) {
    alert ("Tu descuento es de 10%")
    let total = amount - (amount * 0.10)
    alert ("Total a Pagar: " + total)
} else {
    alert ("Descuento no aplicado")
    alert("Total a Pagar: " + amount)
}

*/

// Indica si numero es negativo o positivo y si es par o impar


/*
let number = parseFloat(prompt("Escribe tu numero: "))

if (number > 0 ) {
    if (number%2 === 0) {
        alert("Numero es Positivo y Par")
    } else {
        alert("Numero Positivo e Impar")
    }

} else if (number < 0){
    if (number%2 === 1){
    alert("Numero es Negativo y Par")
    }else {
        alert("Numero Negativo e Impar")
    }
} else{
    alert("Numero es 0")
}
    */

// bucle que imprima los numeros de 1-10

/*
for (let i = 1; i<=10; i++){
    console.log(i)
}

*/
// bucle que imprima numero de 10-1

/*
for (let x = 10; x > 0; x--){
    console.log(x)
}
*/

// bucle ue imprima numeros de 1-20 pero solo pares

/*
for(let i=2; i<=20; i= i+2){
    console.log(i)
}
*/

// bucle que imprima la suma de los primeros "n" numeros, siendo "n"  un valor ingresado por el usuario

/*
let number = parseInt(prompt("Ingresa un numero"))
let sum = 0

for (let i = 1 ; i <= number; i++) {
    sum = sum + i
}
console.log (sum)
*/

// crea un bucle que imprima la tabla de multiplicar de un numero "N" que el usuario ingrese 

/*
let number = parseInt(prompt("Ingresa un numero: "))
let mult = 0

for (let i = 1; i <= 10; i++){
    mult = number * i
    console.log(number + " X " + i + " = " + mult )
}
*/

// crea un bucle que me imprima las tablas de multiplicar hasta el número "n" que el usuario ingrese

/*
let number = parseInt(prompt("Ingresa un numero: "))
let multiplying = 0

for (let i = 1; i <= number; i++) {
    multiplying = multiplying + 1
    for (let i = 1; i <= 10; i++){
    console.log(multiplying + " X " + i + " = " + (multiplying * i) )
}
}

*/