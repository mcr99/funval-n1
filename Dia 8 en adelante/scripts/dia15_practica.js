// Ejercicio 1

/* 
    EJERCICIO 1 PARA CONDICIONALES
    nuestro amigo Jorge tiene una discoteca, esa discoteca quiere implementar un sistema 
    de ingreso a sus sucursales 
    solo podran ingresar las personas mayores de edad 
    y si es menor de edad entre 15 y 17 años debera contar con el permiso de la mama o el papa 
    
    DATOS DE ENTRADA
    1ro  edad del usuario si tiene mas de 18 ingresa 
    2do  permiso de los padres 
    DATOS DE SALIDA 
    FELICIDADES PUEDES INGRESAR ALA DISCOTECA
    POR FAVOR RETORNA A TU HOGAR ERES MENOR DE EDAD 
*/

/*
let age = parseInt(prompt(`Ingresa Tu edad: `))

if (age >= 18) {
    alert(`Bienvenido puedes ingresar a la Discoteca!`)
} else if (age >= 15) {
    let permission = prompt(`Tienes el permiso de tus Padres? (Si o No)`)
    if (permission.toLowerCase() === `si`){
        alert(`Bienvenido puedes ingresar a la Discoteca!`)
    } else {
        alert(`Pide Permiso a tus padres para ingresar`)
    }
} else {
    alert(`Por Favor Retorna a tu Hogar eres menor de Edad`)
}
*/


// Ejercicio 2

/* 
EJERCICIO 2 LOTES 
EL DUEÑO DE UNA EMPRESA DE LACTEOS QUE TIENE MUCHAS SUCURSALES ESTA REGSITRANDO EL INGRESO Y PERDIDAS Q TIENE CADA SUCURSAL
SIEMPRE PODRA RECIBIR DATOS POSITIVOS O NEGATIVOS HASTA Q NUESTRO USUARIO COLOQUE EL NUMERO 0
contar la cantidad de sucursales q tienen ingresos positivos y cuanmtas negativos 
DATOS DE ENTRADA
5           2               5
10          0               3
32                          0
-45
100
0
DATOS DE SALIDA
SALISTE DEL PROGRAMA 
la cantidad de sucursales exitosas son 4
la cantidad de sucursales negativas son 1
*/

let earnings = 0
let earningsCounter = 0
let losses = 0
let lossesCounter = 0
let accounting


do {
    accounting = parseFloat(prompt(`Ingresa el ingreso o perdida de la sucursal: 
        (Ingresa 0 para salir):
        `))
        if (accounting > 0){
            earnings = earnings + accounting
            earningsCounter ++
        } else if (accounting < 0){
            losses = losses + accounting
            lossesCounter ++ 
        }
    
}while (accounting !==0);
    

alert(`
    Total de Ganancias: $${earnings}
    Total de Perdidas: $${losses}
    Total: $${earnings + losses} 
    Negocios con Ganacias: ${earningsCounter}
    Negocios con Perdidas: ${lossesCounter}
    `)




/*
let firstTriangle
let secondTriangle
let thirdTriangle
let times

for (times = 0; times < 3; times++) {
    let base = parseInt(prompt(`Ingresa la base de triangulo ${times+1}:`))
    let height = parseInt(prompt(`Ingresa la altura de triangulo ${times+1}:`))
    if(base > 0 && height > 0) {
        switch (times) {
            case 0 : 
                firstTriangle = (base * height) / 2
            case 1 :
                secondTriangle = (base * height) / 2
            case 2 :
                thirdTriangle = (base * height) / 2
                break;
        }
    }else {
        alert(`Valor incorrecto. Ingrese el valor del triangulo ${times+1} nuevamente`)
        times --
        
    }
}

    alert(`
        Area Triangulo 1:  ${firstTriangle}
        Area Triangulo 2:  ${secondTriangle}
        Area Triangulo 3:  ${thirdTriangle}
        `)
*/
