// Ejemplo 1: Buscar un número específico
const numeros = [5,10,9, 12, 8, 130, 44, 11];

const encontrado = numeros.find(numero => numero > 7);
console.log(encontrado); // 12 (el primero que cumple)

const noEncontrado = numeros.find(numero => numero > 200);
console.log(noEncontrado); // undefined


/* 
    FUNVAL TIENE UNA LISTA CON INFORMACION DE SUS ESTUDIANTES 
    Y QUIERE SABER Q ESTUDIANTES TIENEN UN PROMEDIO DE MAS DE 60 PTS 
    PARA PODER RECOMENDARLOS A UNA NUEVA EMPRESA 
    SU TRABAJO ES DEFINIR QUE ESTUDIANTES SERAN RECOMENDADOS POR FUNVAL
*/
let estudiantes = [
  {
    nombre: "Jaime",
    nacionalidad: "Mexico",
    edad: 33,
    notas: [100, 55, 77, 0],
    empresa: {
      nombre: "Microsoft",
      cantEmp: 322,
    },
  },
  {
    nombre: "Maria",
    nacionalidad: "Mexico",
    edad: 33,
    notas: [0, 10, 1, 0],
    empresa: {
      nombre: "kevinsoft",
      cantEmp: 2,
    },
  },
  {
    nombre: "Pedro",
    nacionalidad: "Mexico",
    edad: 33,
    notas: [100, 99, 88, 90],
    empresa: {
      nombre: "IBM",
      cantEmp: 1200,
    },
  },
];