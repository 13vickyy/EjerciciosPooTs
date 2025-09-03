"use strict";
/*3. Crear una clase Articulo que tenga los atributos privados marca y modelo.
● Crear métodos públicos para la asignación de valores.
● Crear una instancia y asignarle valores.
● Notar que no es posible mostrar los valores por pantalla y analizar el motivo por lo que
esto ocurre.*/
Object.defineProperty(exports, "__esModule", { value: true });
class Articulo {
    marca; // Atributo privado 'marca', solo accesible dentro de la clase
    modelo; // Atributo privado 'marca', solo accesible dentro de la clase
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }
    AsignarValores(NuevaMarca, NuevoModelo) {
        // Usamos nombres diferentes para los parámetros para no confundirlos con los atributos de la clase
        // 'this.marca' se refiere al atributo de la clase
        // 'nuevaMarca' se refiere al valor que estamos pasando al método
        this.marca = NuevaMarca;
        this.modelo = NuevoModelo;
    }
    MostrarDatos() {
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}`);
    }
}
const celular = new Articulo("Samsung", "Galaxy S23");
celular.MostrarDatos(); //llamo a la funcion mostrar datos (metodo mejor dicho)
//# sourceMappingURL=Ej_3.js.map