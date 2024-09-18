// estructuras de control

const puntaje = 1000;

if(puntaje == 1000) {
    console.log('Si el puntaje es 1000');
} else {
    console.log('No es igual')
}

//!== si es diferente a mil
// if(puntaje !== 1000) {
//    console.log('No es igual');
    
//} else {
//    console.log('Si el puntaje es 1000') 
//}

// const efectivo = 1000;
// const carrito = 800;

// if( efectivo > carrito ) {
//     console.log('el usuario puede pagar');
// } else {
//     console.log('Fondos Insuficientes');
// }

const rol = 'VISITANTE';

if(rol === 'ADMINISTRADOR') {
    console.log('Acceso a todo el sistema');
} else if(rol === 'EDITOR') {
    console.log('Eres EDITOR, puedes entrar pero no para todo');
} else {
    console.log('No tienes acceso');
}


