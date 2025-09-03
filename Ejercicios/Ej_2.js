"use strict";
/*2. Crear una clase Vehiculo que tenga los atributos públicos marca, modelo y un atributo privado
patente.
● Crear una instancia y asignarle valores; notar que el atributo privado no está disponible
para la asignación de valores.
● Mostrar por pantalla los valores asignados.*/
Object.defineProperty(exports, "__esModule", { value: true });
class vehiculo {
    marca;
    modelo;
    patente;
    constructor(marca, modelo, patente) {
        this.marca = marca;
        this.modelo = modelo;
        this.patente = patente;
    }
    getpatente() {
        return this.patente;
    }
}
const auto = new vehiculo("Peugeot", "207 xt", "AAA 999");
console.log(`Marca: ${auto.marca}, Modelo: ${auto.modelo}, Patente: ${auto.getpatente}`);
//# sourceMappingURL=Ej_2.js.map