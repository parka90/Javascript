
// Arrow Functions
const sumar2 = (n1, n2) => console.log(n1 + n2);
sumar2(5, 10);

const aprendiendo = tecnologia => console.log(`Aprendiendo ${tecnologia}`)

aprendiendo('JavaScript');

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
meses.forEach( mes => {
    if(mes == 'marzo') {
        console.log('marzo si existe');
    }
});

let resultado;

resultado = carrito.some( producto => producto.nombre === 'Celular');

//let resultado = meses.includes('Diciembre');

 //REDUCE

resultado = carrito.reduce((total, producto) =>  total + producto.precio, 0 );

// filter

resultado = carrito.filter( producto => producto.precio > 400);

resultado = carrito.filter( producto => producto.nombre === 'Celular');


console.log(resultado)