// For loop

//for( let i = 0; i < 10; i ++ ) {
//    console.log(i);
//}

//for( let i = 1; i <= 100; i ++ ) {
//    if( i % 2 === 0 ) {
//        console.log(`El Numero ${i} es PAR`);
//    } else {
//        console.log(`El Numero ${i} es IMPAR`);
//    }
//}


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

for (let i = 0;  i < carrito.length ; i++) {
    console.log( carrito[i].nombre );
    
}


// While Loop (Tiene que revisar que la condicion se cumpla para poder ejecutar)

//let i = 1; // indice

//while ( i <= 100 ) { //condicion
 
//    if (i % 2 === 0) {
//        console.log(`El numero ${i} es PAR`)
//    } else {
//        console.log(`El numero ${i} es IMPAR`)
//    }
    
//    i++; // Incremento
//}


// while (i < carrito.length) {
//     console.log(carrito[i].nombre)
//     i++;
// }



// Do while Loop (se EJECUTA AL MENOS 1 vez aunqe la condicion no se cumpla)

let i = 100;

do {
    console.log(i);
    

    i++;

} while( i < 10); 
