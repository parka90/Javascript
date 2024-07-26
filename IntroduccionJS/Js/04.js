// String o cadenas de texto

const producto = "Monitor de 20\"";
const producto2 = "Monitor HD";
const tweet = 'Aprendiendo JavaScript con el curso de Desarrollo Web completo'
const email = 'correo@correo.com';


// const producto2 = String('Monitor de 30 pulgadas');
//const producto3 = new String('Monitor de 50 pulgadas')

//length para la extension

console.log(producto);
console.log(producto2);
console.log(tweet.length);

// indexOf para encontrar un elemento en el string (retorna a la posicion)

console.log(tweet.indexOf('JavaScript'));
//console.log(producto2.indexOf(tablet));
console.log(email.indexOf('@'));

// Include (retorna true o false)
console.log(tweet.includes('JavaScript'));
console.log(producto2.includes('Tablet'));