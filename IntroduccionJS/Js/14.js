// Arreglos / Arrays

const numeros = [10,20,30,40,50]



// const meses = new Array('enero', 'febrero', 'marzo', 'abril', 'mayo');


// console.table(meses);

const arreglo = ["hola", 10, true, "si", null, {nombre: "matias", trabajo: "programador"}, [1,2,3]];

// console.log(arreglo);

// acceder a los valores de un arreglo
// console.log(numeros[4])

//conocer la extension de un arreglo 
// console.log(meses.length);

// numeros.forEach( function(numero) {
    // console.log(numero);
// })

// numeros[5] = 60;
// numeros[6] = 70;

numeros.push(60,80,90); // agrega al final del arreglo
// numeros.push(70);

numeros.unshift(-10,-20,-30); // agrega el inicio del arreglo



console.table(numeros);

const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo'];
// meses.pop(); // elimina el ultimo elemento
// meses.shift(); // elimina el primer elemento

meses.splice(2, 1);

console.table(meses);

// rest operator o spread operator

const nuevoArreglo = [...meses, 'junio'];
console.log(nuevoArreglo);

