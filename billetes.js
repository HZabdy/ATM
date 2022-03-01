class Billete {
    constructor(c, v){
        this.cantidad = c;
        this.valor = v;
        this.imagen = new Image();
        this.imagen.src = billeteImagen[v];

    }
}