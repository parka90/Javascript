// this


// const reservacion = {
//     nombre: 'Matias',
//     apellido: 'Raffo',
//     total: 5000,
//     pagado: false,
//     informacion: function() {
//         console.log(`El Cliente ${reservacion.nombre} reservo y su cantidad a pagar es de ${reservacion.total} `)
//     } 

// }    

const reservacion = {
    nombre: 'Matias',
    apellido: 'Raffo',
    total: 5000,
    pagado: false,
    informacion: function() {
        console.log(`El Cliente ${this.nombre} reservo y su cantidad a pagar es de ${this.total} `)
    } 

}  

const reservacion2 = {
    nombre: 'Juan',
    apellido: 'Dios',
    total: 5000,
    pagado: false,
    informacion: function() {
        console.log(`El Cliente ${this.nombre} reservo y su cantidad a pagar es de ${this.total} `)
    } 

}    

reservacion.informacion();
reservacion2.informacion();

