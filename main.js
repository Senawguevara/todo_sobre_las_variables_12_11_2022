addEventListener("DOMContentLoaded", (e) => {

    document.querySelector("body").innerHTML= '<h1>Favor abrir las herramientas de desarrollo para revisar la actividad</h1>'

//En javaScript exiten 7 tipos de datos

let String ='Let puede guardar cadenas de texto';
console.log(String);

let Number = 'let puede guardar valores numericos';
console.log(Number);

let boolean = 'let guarda un valor verdadero o falso';
console.log(boolean);

let nullva = 'let null es un valor asignado tienen el valor de --no valor--';
console.log(nullva);

let undefined = 'let guarda una variable a la que se le ha asignada ingun valor tiene el valor undefined';
console.log(undefined);
let symbol = 'let Symbol es nuevo en ESMACcript 2015';
console.log(symbol);

let object = ' let object guarda un valor en memoria al que podemos acceder oir un identificador';

console.log(object);

console.log('--------------------------------------------------------------------------------------------');

console.log('DESARROLLO DE LA ACTIVIDAD')

let nombre = 'wilmar';
let apellido = 'guevara';
let edad = 37;
let diaNacimiento = 11;
let anoNacimiento = 1985;
let mesNacimiento = 'agosto';
let soyMujer = false;
let datoVacio;


let datosOficina = {
    empresa: 'Formadcol',
    area:'Ingenieria',
    cargo:'Deliniante',
    tel: 3053108867,
};

console.log(`Mi nombre es ${nombre}, mi apellido es ${apellido} tengo ${edad} años, naci el ${diaNacimiento} de ${mesNacimiento} de ${anoNacimiento}`);

console.log(`Actual mente trabajo en la empresa llamada ${datosOficina.empresa} en el area de ${datosOficina.area} con el cargo de ${datosOficina.cargo} y mi numero de contaco en la empresa es ${datosOficina.tel}`)
console.log('--------------');

console.log(typeof nombre,'variable nombre');
console.log(typeof apellido, 'variable apellido');
console.log(typeof edad, 'variable edad');
console.log(typeof diaNacimiento, 'variable dia nacimiento');
console.log(typeof anoNacimiento, ' variable año nacimiento');
console.log(typeof mesNacimiento, 'variable mes nacimiento');
console.log(typeof soyMujer, 'varible tipo booleano');
console.log(typeof datoVacio,'varibable vacia');
console.log(typeof datosOficina, 'variable objeto' )

console.log('-------------');

console.log(nombre,'variable nombre');
console.log(apellido, 'variable apellido');
console.log(edad, 'variable edad');
console.log(diaNacimiento, 'variable dia nacimiento');
console.log(anoNacimiento, ' variable año nacimiento');
console.log(mesNacimiento, ' variable mes nacimiento');
console.log(soyMujer, 'varible tipo booleano');
console.log(datoVacio,'varibable vacia');
console.log(datosOficina, 'variable objeto' )

})