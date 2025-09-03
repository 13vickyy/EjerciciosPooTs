"use strict";
/*4. Crear una clase Cine que tenga los atributos privados película y horario:
● Crear métodos públicos para la asignación y recuperación de valores.
● Crear un método público obtenerCartelera() que devuelva el nombre de la película y el
horario.
● Crear una instancia y asignarle valores.
● Mostrar por pantalla los valores.*/
Object.defineProperty(exports, "__esModule", { value: true });
class cine {
    pelicula;
    horario;
    constructor(pelicula, horario) {
        this.pelicula = pelicula;
        this.horario = horario;
    }
    AsignarValores(NuevaPelicula, NuevoHorario) {
        this.pelicula = NuevaPelicula; // this.pelicula es el privado, y yo le asigno un nuevo valor con este metodo nuevo AsignarValores
        this.horario = NuevoHorario; // o sea...Cambia el valor
    }
    ObtenerCartelera() {
        console.log(`Pelicula: ${this.pelicula}, Horario: ${this.horario}`);
    }
}
const CineHoy = new cine("Sonrie 2", "22:00hs");
CineHoy.ObtenerCartelera();
//# sourceMappingURL=Ej_4.js.map