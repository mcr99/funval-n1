// ATM 
/*
    ATM - Cajero Automatico
    Tiene un limite de 3 intentos
    usuario: Funval
    contraseña : Progra123
    
    Saldo Inicial = $1000
    Debe desplegar un menú de opciones como:
    Retirar - Solo se puede retirar una cantidad menor al Saldo Actual
    Depositar
    Ver Saldo
    Salir
    un bucle que hasta que el usuario no elija la opción "Salir" pueda continuar sugiriendo hacer otras operaciones.
 */


let userName = `Funval`
let password = `Progra123`

let inputUserName
let inputPassword
let tries = 0
let balance = 1000


do  {
    inputUserName = prompt(`Ingresa Tu nombre de Usuario: `)
    inputPassword = prompt(`Ingresa Tu Contraseña: `)
    if (userName === inputUserName || password === inputPassword){
        let continueMenu = true
        do {
            let options = parseInt(prompt(`
            Ingresa: 
            1 - Retiro
            2 - Deposito
            3 - Ver Saldo
            4 - Salir
            `))
            switch (options) {
                case 1 :
                    let withdrawal = parseFloat(prompt(`Ingresa la cantidad del Retiro: `))
                    if (withdrawal < balance) {
                        balance = balance - withdrawal
                        alert(`Haz retirado $${withdrawal}`)
                    } else alert(`Fondos Insuficientes`)
                    break;
                case 2 : 
                    let deposit = parseInt(prompt(`Ingresa la cantidad a Depositar: `))
                    balance = balance + deposit
                    break;
                case 3 : 
                    alert(`Tu Saldo es ${balance}`)
                    break;
                case 4 :
                    alert(`Gracias por usar nuestro servicio`)
                    continueMenu = false
                    tries = 5
                    break;
                default:
                    alert(`Ingresa opcion Correcta`)
            }
        } while(continueMenu)
        
    } else {
        if (tries < 2) {
        alert(`Credenciales Incorrectas Intente Nuevamente`)
        }
        tries ++
    }
    
} while( tries < 3)

if (tries === 3 ){
    alert(`Haz utilizado el limite de intentos, Contacta a tu proveedor`)
}



//################################################

/*
let user = "Funval"
let password = "Progra123"
let tries = 3
let balance = 1000
do {
    let userGuest = prompt(" Ingrese su usuario: ")
    let passwordGuest = prompt(" Ingrese su contraseña: ")
    if (userGuest === user && passwordGuest === password) {
        let continueMenu = true
        do {
            let menuOption = prompt(`
                Seleccione una opción:
                1- Retiro
                2- Deposito
                3- Ver Saldo
                4- Salir
                `)
            switch (menuOption) {
                case "1":
                    let withdrawal = parseFloat(prompt("Ingrese el monto a retirar:"))
                    if (withdrawal < balance) {
                        balance = balance - withdrawal
                    } else {
                        alert("No tienes Saldo suficiente para esta operación")
                    }
                    break;
                case "2":
                    let deposit = parseFloat(prompt("Ingrese el monto a depositar:"))
                    balance = balance + deposit
                    break;
                case "3":
                    alert("Tu saldo es: " + balance)
                    break;
                case "4":
                    alert("Gracias por usar nuestro servicio")
                    continueMenu = false
                    tries = -1
                    break;
            
                default:
                    alert("Ingrese una opcion valida")
                    break;
            }
        } while (continueMenu);
    } else {
        alert("Datos incorrectos, intente nuevamente")
        tries--
    }
    
} while (tries > 0);
if (tries===0) {
    alert("Exedió el número de intentos permitidos. Comuniquese con su banco")
}
*/


// ATM 
/*
    ATM - Cajero Automatico
    Tiene un limite de 3 intentos
    usuario: Funval
    contraseña : Progra123
    
    Saldo Inicial = $1000
    Debe desplegar un menú de opciones como:
    Retirar - Solo se puede retirar una cantidad menor al Saldo Actual
    Depositar
    Ver Saldo
    Salir
    un bucle que hasta que el usuario no elija la opción "Salir" pueda continuar sugiriendo hacer otras operaciones.
 */




