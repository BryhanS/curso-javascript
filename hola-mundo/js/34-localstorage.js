'use strict'

// Localstorage

// Comprobar disponibilidad del localstorage

if(typeof(Storage) !== 'undefined'){
    console.log("Localstorage disponible");
}else{
    console.log("Incompatible con Localstorage");
};

// Guardar datos
localStorage.setItem("titulo", "Curso de Symfony de Victor Robles");

// Recuperar elemento
document.querySelector("#peliculas").innerHTML = localStorage.getItem("titulo");

// Guardar Objetos
var usario = {
    nombre: "Victor Robles",
    email: "victor@robles.com",
    web: "victor.com.pe"
};

localStorage.setItem("usuario", JSON.stringify(usario));

// Recuperar objeto
var userjs = JSON.parse(localStorage.getItem("usuario"));

console.log(userjs);
document.querySelector("#datos").append(" " +userjs.web+" - "+userjs.nombre);

localStorage.clear();