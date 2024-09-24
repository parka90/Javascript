// POO (programacion orientada a objetos)


// Object literal

const producto = {
    nombre: 'Tablet',
    precio: 500,
}

// Object constructor

function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
}

// Crear funciones que solo se utilizan en un objeto en especifico

Producto.prototype.formatearProducto = function() {
    return `${this.nombre} tiene un precio de: $ ${this.precio}`;
}

const producto2 = new Producto('Monitor Curvo de 49"', 800);
const producto3 = new Producto('Laptop"', 1500);
const producto4= new Producto('Smartwatch"', 300);
const producto5 = new Producto('Aire Acoindicionado"', 1200);



function formatearProducto(producto) {
    return `${producto.nombre} tiene un precio de: $ ${producto.precio}`;
}


console.log(producto2.formatearProducto() );
console.log(producto3.formatearProducto() );
console.log(producto4.formatearProducto() );
console.log(producto5.formatearProducto() );



