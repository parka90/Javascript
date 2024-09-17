
// Declaracion de Funcion

function sumar() {
    console.log(10 + 10);
}

sumar() // si esto lo pongo antes del function sigue funcionando 

// Expresion de la funcion
const sumar2 = function() {
    console.log(3 + 3);
}

sumar2(); //si esto lo pongo antes de la funcion, marca error.


//IIFE
(function() {
    console.log('esto es una funcion')
})();

