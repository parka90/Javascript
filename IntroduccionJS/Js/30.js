const usuarioAutenticado = new Promise( (resolve, reject) => {
    const auth = true;

    if(auth) {
        resolve('Usuario Autenticado'); // EL PROMISE SE CUMPLE
    } else {
        reject('No pudo Iniciar la Sesion'); // EL PROMISE NO SE CUMPLE
    }
});

usuarioAutenticado 
    .then( resultado => console.log(resultado))
    .catch( error => console.log(error))

// en los promises existen 3 valores 
// pending: no se ha cumplido pero tampoco se ha rechazado
// fulfilled: ya se cumplio
// rejected: no se pudo cumplir

