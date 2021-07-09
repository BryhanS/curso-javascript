'use strict'
window.addEventListener('load', function () {
    console.log("DOM cargado!!");

    var formulario = document.querySelector("#formulario");
    var box_dashed = document.querySelector(".dashed");
    box_dashed.style.display = "none";

    formulario.addEventListener('submit', function () {
        console.log("Evento submit capturado");

        var nombre = document.querySelector("#nombre").value;
        var apellido = document.querySelector("#apellidos").value;
        var edad = parseInt(document.querySelector("#edad").value);

        if(nombre.trim() == null  || nombre.trim().length ==0 ){
            alert("El nombre no es valido");
            document.querySelector("#error_nombre").innerHTML = "El nombre no es valido";
            return false;
        }else{
            document.querySelector("#error_nombre").style.display = "none";
        };

        if(apellido.trim() == null  || apellido.trim().length ==0 ){
            alert("El apellidos no son validos");
            return false;
        };

        if(edad == null  || edad <= 0 || isNaN(edad)){
            alert("La edad no es valido");
            return false;
        };




        box_dashed.style.display = "block";

        var p_nombre = document.querySelector("#p_nombre span");
        var p_apellidos = document.querySelector("#p_apellidos span");
        var p_edad = document.querySelector("#p_edad span");

        p_nombre.innerHTML = nombre;
        p_apellidos.innerHTML = apellido;
        p_edad.innerHTML = edad;

        /*
        var datos_usuarios = [nombre, apellido, edad];
        var indice;

        for (indice in datos_usuarios) {
            var parrafo = document.createElement("p");
            parrafo.append(datos_usuarios[indice]);
            box_dashed.append(parrafo);
        };
        */
    });



});