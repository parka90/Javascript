const carrito = [
    { nombre: 'monitor 20 pulgadas', precio: 500 },
    { nombre: 'tv 50 pulgadas', precio: 700 },
    { nombre: 'Tablet', precio: 300 },
    { nombre: 'Audifonos', precio: 200 },
    { nombre: 'Teclado', precio: 50 },
    { nombre: 'Celular', precio: 500 },
    { nombre: 'Bocinas', precio: 300 },
    { nombre: 'Laptop', precio: 800 },
];

// ForEach
 
carrito.forEach( producto => console.log(producto.nombre)); // para iterar y mostrar en pantalla o consola

// map 
carrito.map( producto => console.log(producto.nombre)); // para crear un nuevo arreglo
