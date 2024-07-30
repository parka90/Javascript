"use strict"; // Correr JS en modo estricto
// Objetos

const producto = {
    nombreProducto : "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}

Object.freeze(producto); // no te permite agregar propiedades ni modificar

producto.imagen = 'imagen.jpg';

console.log(Object.isFrozen(producto));

console.log(producto);

Object.seal(producto); // no te permite agregar o sacar Propiedades pero si te permite modificar 