var bicicleta = {
    color: 'Rojo',
    modelo: 'BMX',
    frenos: 'De disco',
    velocidadMaxima: '60km',
    cambiarColor: function(nuevo_Color){
        //bicicleta.color = nuevo_Color
        this.color = nuevo_Color;
        console.log(this);
    }
};

bicicleta.cambiarColor("Azul");