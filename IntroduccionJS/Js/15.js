//array methods

const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo'];

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


// forEach

meses.forEach(function(mes) {
    if(mes == 'marzo') {
        console.log('marzo si existe');
    }
});

// IF se utiliza para verificar si existe

// INCLUDES

// const resultado = meses.includes('marzo');
// const resultado2 = carrito.includes('Celular');
// console.log(resultado);

let resultado = meses.includes('Diciembre');

// SOME ideal para arreglo de objetos

resultado = carrito.some(function(producto) {
    return producto.nombre === 'celular'
})

//REDUCE

resultado = carrito.reduce(function(total, producto) {
    return total + producto.precio
}, 0 );



// filter

resultado = carrito.filter(function(producto) {
    return producto.precio > 400
});
resultado = carrito.filter(function(producto) {
    return producto.nombre === 'Celular'
});


console.log(resultado)