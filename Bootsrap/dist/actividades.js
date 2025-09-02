"use strict";
class Articulo {
    marca;
    modelo;
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }
    AsignarValores(NuevaMarca, NuevoModelo) {
        this.marca = NuevaMarca;
        this.modelo = NuevoModelo;
    }
    MostrarDatos() {
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}`);
    }
}
const celular = new Articulo("Samsung", "Galaxy S23");
celular.MostrarDatos();
class cine {
    pelicula;
    horario;
    constructor(pelicula, horario) {
        this.pelicula = pelicula;
        this.horario = horario;
    }
    AsignarValores(NuevaPelicula, NuevoHorario) {
        this.pelicula = NuevaPelicula;
        this.horario = NuevoHorario;
    }
    ObtenerCartelera() {
        console.log(`Pelicula: ${this.pelicula}, Horario: ${this.horario}`);
    }
}
const CineHoy = new cine("Sonrie 2", "22:00hs");
console.log(CineHoy.ObtenerCartelera());
//# sourceMappingURL=actividades.js.map