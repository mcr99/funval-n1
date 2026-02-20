const productos = [
  {
    nombre: "Laptop Pro 15",
    categoria: "Computadoras",
    precio: 1200,
    cantidad: 5,
  },
  {
    nombre: "Mouse Ergonómico",
    categoria: "Accesorios",
    precio: 25,
    cantidad: 20,
  },
  {
    nombre: 'Monitor 4K 27"',
    categoria: "Monitores",
    precio: 350,
    cantidad: 8,
  },
  {
    nombre: "Teclado Mecánico RGB",
    categoria: "Accesorios",
    precio: 80,
    cantidad: 15,
  },
  { nombre: "Impresora Láser", categoria: "Oficina", precio: 200, cantidad: 3 },
  {
    nombre: "Silla de Escritorio",
    categoria: "Muebles",
    precio: 150,
    cantidad: 10,
  },
  {
    nombre: "Escritorio Elevable",
    categoria: "Muebles",
    precio: 400,
    cantidad: 4,
  },
  {
    nombre: "Disco Duro Externo 2TB",
    categoria: "Almacenamiento",
    precio: 90,
    cantidad: 12,
  },
  {
    nombre: "Memoria USB 64GB",
    categoria: "Almacenamiento",
    precio: 15,
    cantidad: 50,
  },
  {
    nombre: "Webcam Full HD",
    categoria: "Accesorios",
    precio: 60,
    cantidad: 18,
  },
  {
    nombre: "Auriculares Noise Cancelling",
    categoria: "Audio",
    precio: 250,
    cantidad: 7,
  },
  {
    nombre: "Micrófono USB Condensador",
    categoria: "Audio",
    precio: 110,
    cantidad: 6,
  },
  {
    nombre: "Cable HDMI 2.1",
    categoria: "Accesorios",
    precio: 12,
    cantidad: 30,
  },
  { nombre: "Router WiFi 6", categoria: "Redes", precio: 130, cantidad: 9 },
  {
    nombre: "Adaptador USB-C Hub",
    categoria: "Accesorios",
    precio: 45,
    cantidad: 25,
  },
];

let tableInfo = document.querySelector("#tableInfo");


for (let i = 0; i < productos.length; i++){
    tableInfo.innerHTML += `
    <tr>
    <td class="text-center border py-2 px-1">${productos[i].nombre}</td>
    <td class="text-center border py-2 px-1">${productos[i].categoria}</td>
    <td class="text-center border py-2 px-1">$${productos[i].precio}</td>
    <td class="text-center border py-2 px-1">${productos[i].cantidad}</td>
    <tr>
    `
}

