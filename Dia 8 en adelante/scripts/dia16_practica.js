/*
Simulador de elecciones 
Consiste en que de inicio el programa seleccionará 2 opciones:
1. Ingresar Voto
2. Finalizar Votación  
Si se seleciona "Ingresar Voto" se requerirá 2 cosas:
el nombre del votante y lo su elección
(ejemplo: partido 🍔, partido ☀️, partido 🌎 )
El programa debe incluir un bucle que cuando se complete un 
nombre y una opción de postulante , pueda pedir nuevamente 
los datos para otra persona o finalizar votación.
Al seleccionar finalizar votación, debe mostrar el resultado de los votos
y también los votantes de cada partido.

Resultados
Ganó el partido ☀️ con 5 votos
el partido 🍔 recibió 4
el partido 🌎 recibió 3

Votos del el partido 🍔: Daniel, Maria, Miguel, etc.
Votos del partido ☀️: Daniel, Maria, Miguel, etc.
Votos del el partido 🌎: Daniel, Maria, Miguel, etc.
*/


const comperWinners = function (one, two, three) {
    if (one > two){
        if (one > three){
            if (two > three) {
                alert(`
                    El ganador es partido 🍔 con: ${one.length} votos
                    El segundo lugar es partido ☀️ con: ${two.length} votos
                    El tercer lugar es partido 🌎con: ${three.length} votos
                    `)
            }else if (two < three) { // verificar empates
                alert(`
                    El ganador es partido 🍔 con: ${one.length} votos
                    El segundo lugar es partido 🌎 con: ${three.length} votos
                    El tercer lugar es partido ☀️ con: ${two.length} votos
                    `)
            }
        }else { // 
            alert(`
                El ganador es partido 🌎 con: ${three.length} votos
                El segundo lugar es partido 🍔 con: ${one.length} votos
                El tercer lugar es partido ☀️ con: ${two.length} votos
                `)
        }
    }else if (one < two) {
        if(two > three) {
            if(three > one){
            alert(`
                El ganador es partido ☀️ con: ${two.length} votos
                El segundo lugar es partido 🌎 con: ${three.length} votos
                El tercer lugar es partido 🍔 con: ${one.length} votos
                `)
            }else { // 
            alert(`
                El ganador es partido ☀️ con: ${two.length} votos
                El segundo lugar es partido 🍔 con: ${one.length} votos
                El tercer lugar es partido 🌎con: ${three.length} votos
                `)
            }
        }
    } else { // 
        alert(`
            El ganador es partido 🌎 con: ${three.length} votos
            El segundo lugar es partido ☀️ con: ${two.length} votos
            El tercer lugar es partido 🍔 con: ${one.length} votos
            `)
    }
}

let insertVote

let option1 = []
let option2 = []
let option3 = []

do {
    insertVote = parseInt(prompt(`
        Ingrese una opcion: 
        1 - Ingresar Voto
        2 - Finalizar Votacion
        `))
    if (insertVote === 1){
        let name = prompt(`Ingresa tu nombre: `)
        let vote = parseInt(prompt(`
            Ingresa tu voto:
            1 - partido 🍔
            2 - partido ☀️
            3 - partido 🌎
            `))
            switch (vote) {
                case 1 :
                    option1.push(" " + name)
                    break;
                case 2 :
                    option2.push(" " + name)
                    break;
                case 3: 
                    option3.push(" " + name)
                    break;
                default: 
                alert(`Opcion Incorrecta: `)
            }
    }else if (insertVote === 2){
        comperWinners(option1, option2, option3)
        alert(`
            Los votos de partido 🍔 son: ${option1}
            Los votos de partido ☀️ son: ${option2}
            Los votos de partido 🌎 son: ${option3}
            `)
    }else {
        alert(`Opcion Incorrecta Intente nuevamente`)
    }
} while (insertVote !== 2)



/*
let levelList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let actualLevel = 1

do {
    newLevel = parseInt(prompt(`
        ${levelList[actualLevel - 2]} [${levelList[actualLevel - 1]}] ${levelList[actualLevel]}
        `))
} while (newLevel !==0)

*/
