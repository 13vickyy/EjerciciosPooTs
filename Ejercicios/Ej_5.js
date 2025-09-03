"use strict";
/*5. Crear una clase Cine que tenga los atributos privados película y horario. OK
● Crear métodos públicos para la asignación y recuperación de valores. OK
● Crear una instancia y asignarle valores. OK
● Mostrar por pantalla los valores. OK
● Crear una segunda instancia y asignarle valores. OK
● Mostrar por pantalla los valores. OK
● Cambiar los valores de la primera instancia. OK
● Mostrar en pantalla los valores de ambas instancias; concluir que la instrucción new crea
objetos distintos.*/
Object.defineProperty(exports, "__esModule", { value: true });
class cine {
    pelicula;
    horario;
    constructor(pelicula, horario) {
        this.pelicula = pelicula;
        this.horario = horario;
    }
    //GETTERS Y SETTERS PARA RECUPERAR ATRIBUTOS PRIVADOS
    setPelicula(nuevaPelicula) {
        return this.pelicula = nuevaPelicula;
    }
    setHorario(nuevoHorario) {
        return this.horario = nuevoHorario;
    }
    getPelicula() {
        return this.pelicula;
    }
    getHorario() {
        return this.horario;
    }
    ObtenerCartelera() {
        console.log(`Pelicula: ${this.pelicula}, Horario: ${this.horario}`);
    }
}
//COMIENZO A INSTANCIAR (DARLE VALOR)
// INSTANCIA 1
const CineHoySala1 = new cine("Sonrie 2", "22:00hs");
// INSTANCIA 2
const CineHoySala2 = new cine("El eternauta", "19:00hs");
// CAMBIO DE VALORES INSTANCIA 1
CineHoySala1.setHorario("23:30hs");
CineHoySala1.setPelicula("Intensamente");
// MOSTRAR VALORES ACTUALIZADOS
CineHoySala1.ObtenerCartelera();
CineHoySala2.ObtenerCartelera();
//# sourceMappingURL=Ej_5.js.map