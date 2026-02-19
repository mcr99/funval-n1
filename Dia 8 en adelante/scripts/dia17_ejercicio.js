const storeProducts = [
  {
    id: 1,
    name: "Laptop Gamer X15",
    category: "Computadoras",
    price: 4500,
    stock: 8,
    rating: 4.7,
    onSale: true
  },
  {
    id: 2,
    name: "Laptop Office Pro",
    category: "Computadoras",
    price: 3200,
    stock: 15,
    rating: 4.3,
    onSale: false
  },
  {
    id: 3,
    name: "Mouse Inalámbrico",
    category: "Accesorios",
    price: 120,
    stock: 40,
    rating: 4.5,
    onSale: true
  },
  {
    id: 4,
    name: "Teclado Mecánico RGB",
    category: "Accesorios",
    price: 350,
    stock: 20,
    rating: 4.8,
    onSale: false
  },
  {
    id: 5,
    name: "Monitor 27'' 4K",
    category: "Monitores",
    price: 1800,
    stock: 10,
    rating: 4.6,
    onSale: true
  },
  {
    id: 6,
    name: "Monitor 24'' Full HD",
    category: "Monitores",
    price: 950,
    stock: 18,
    rating: 4.2,
    onSale: false
  },
  {
    id: 7,
    name: "Silla Gamer Ergonómica",
    category: "Muebles",
    price: 1200,
    stock: 5,
    rating: 4.4,
    onSale: true
  },
  {
    id: 8,
    name: "Escritorio Ajustable",
    category: "Muebles",
    price: 1500,
    stock: 7,
    rating: 4.1,
    onSale: false
  },
  {
    id: 9,
    name: "Tablet Pro 11",
    category: "Tablets",
    price: 2100,
    stock: 12,
    rating: 4.6,
    onSale: true
  },
  {
    id: 10,
    name: "Smartphone Ultra X",
    category: "Celulares",
    price: 3800,
    stock: 9,
    rating: 4.9,
    onSale: true
  },
  {
    id: 11,
    name: "Smartphone Lite",
    category: "Celulares",
    price: 1500,
    stock: 25,
    rating: 4.0,
    onSale: false
  },
  {
    id: 12,
    name: "Audífonos Bluetooth",
    category: "Audio",
    price: 400,
    stock: 30,
    rating: 4.3,
    onSale: true
  },
  {
    id: 13,
    name: "Parlante Portátil",
    category: "Audio",
    price: 650,
    stock: 14,
    rating: 4.5,
    onSale: false
  },
  {
    id: 14,
    name: "Disco SSD 1TB",
    category: "Componentes",
    price: 500,
    stock: 22,
    rating: 4.8,
    onSale: true
  },
  {
    id: 15,
    name: "Memoria RAM 16GB",
    category: "Componentes",
    price: 320,
    stock: 35,
    rating: 4.7,
    onSale: false
  }
];


// 1 - Obtener todos los productos en oferta. return []

function obtainProductsOnSale (product) {
    let available = []
    for (let i = 0; i < product.length; i++){
        if (product[i].onSale === true) {
            available.push(product[i])
        }
    }
    return available
}

console.log(obtainProductsOnSale(storeProducts))

// 2 - Obtener productos con stock menor a 10. return [{}]

function obtainStockLowerThanTen (product) {
    let lowerThanTen = []
    for (let i = 0; i < product.length; i++){
        if (product[i].stock < 10) {
            lowerThanTen.push(product[i])
        }
    }
    return lowerThanTen
}

console.log(obtainStockLowerThanTen(storeProducts))

// 3 - Calcular el valor total del inventario. return number

function calculateTotalValue(product) {
    let total = 0
    for (let i = 0; i < product.length; i++){
        total = (product[i].price * product[i].stock) + total
    }
    return total
}

console.log(calculateTotalValue(storeProducts))

// 4 - Obtener todos los productos de una categoría.return [{}]



// 5-Obtener el nombre del producto más caro. return string


/*
6-Obtener los 3 productos mejor valorados. return [{}]
7-Calcular el promedio de precios por categoría. 
[
    {
    categoria:nombreDeCategoria,
    promedio:promedioDePrecios
    },
    {
    categoria:nombreDeCategoria2,
    promedio:promedioDePrecios2
    },...
]
8-Verificar si todos los productos tienen rating mayor a 4. return boolean
9-Agrupar productos por categoría.
[
    [{},{}],[{},{}],...
]
*/