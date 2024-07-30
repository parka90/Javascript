// Objetos

const producto = {
    nombreProducto : "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}


// Forma Anterior
// const precioProducto = producto.precio;
// const nombreProducto = producto.nombreProducto;

// console.log(precioProducto);
// console.log(nombreProducto);

// Destructuring
const {precio, nombreProducto} = producto;
// const {nombreProducto} = producto;

console.log(nombreProducto);
console.log(precio);
