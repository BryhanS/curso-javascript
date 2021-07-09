'use strict'
/*
1. Pia 6 numeros por pantalla y los meta en un array
2. Mostrar el array entero (todos su elementos) en el cuerpo de la pagina y en la consola
3. Ordenalo y mostrarlo
4. Invertir su orden y mostrarlo
5. Mostrar cuentos elementos tiene el array
6. Busqueda de un valor introducida por el usuario, que nos diga si lo encuentra y su indice
(se valora el uso de funciones)
*/

function mostrarArray(elementos, textoCustom = "") {
    document.write("<h1>Contenido del array " + textoCustom + "</h1>");
    document.write("<ul>");
    elementos.forEach((elemento, index) => {
        document.write("<strong>" + elemento + "</strong><br/>");
    });
    document.write("</ul>");
}


//var numeros = new Array(6);
// Pedir 6 numeros
var numeros = [];

for (var i = 0; i <= 5; i++) {
    //numeros[i] = parseInt(prompt("Introduce un numero: ",0));
    numeros.push(parseInt(prompt("Introduce un numero: ", 0)));
}

// Mostrar en el cuerpo de la pagina

mostrarArray(numeros);


// Mostrar array en la consola
console.log(numeros);

// Ordenar y mostrar
numeros.sort(function (a, b) { return a - b });
mostrarArray(numeros, "Ordenado");

// Invertir y Mostrar
numeros.reverse();
mostrarArray(numeros, "Revertido");

// Contar elementos

document.write("<h1>El array tiene: " + numeros.length + " elementos");

// Busqueda
var busqueda = parseInt(prompt("Busca un numero", 0));

var posicion = numeros.findIndex(numero => numero == busqueda);

if (posicion && posicion != -1) {

    document.write("<h1>ENCONTRADO</h1>");
    document.write("Posicion de la busqueda " + posicion + "</h1>");
}else{
    document.write("<h1>NO ENCONTRADO</h1>");
}
