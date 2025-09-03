"use strict";
//1. Crear una clase Persona que tenga los atributos públicos nombre y apellido.
//● Crear una instancia y asignarle valores.
//● Mostrar por pantalla los valores asignados.
Object.defineProperty(exports, "__esModule", { value: true });
class Persona {
    nombre; //ATRIBUTOS PUBLICOS
    apellido; //ATRIBUTOS PUBLICOS
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
const Juan = new Persona("Juan", "Fernandez"); //nueva instancia y le asigno los valores juan y fernandez
console.log(`Nombre: ${Juan.nombre}, Apellido: ${Juan.apellido}`);
//# sourceMappingURL=Ej_1.js.map