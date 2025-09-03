/*3. Crear una clase Articulo que tenga los atributos privados marca y modelo.
● Crear métodos públicos para la asignación de valores.
● Crear una instancia y asignarle valores.
● Notar que no es posible mostrar los valores por pantalla y analizar el motivo por lo que
esto ocurre.*/

class Articulo{
    private marca: string; // Atributo privado 'marca', solo accesible dentro de la clase
    private modelo: string; // Atributo privado 'marca', solo accesible dentro de la clase

    constructor(marca: string, modelo: string){
        this.marca= marca; 
        this.modelo= modelo;
    }
    AsignarValores(NuevaMarca: string,  NuevoModelo: string): void {  
        // Usamos nombres diferentes para los parámetros para no confundirlos con los atributos de la clase
        // 'this.marca' se refiere al atributo de la clase
        // 'nuevaMarca' se refiere al valor que estamos pasando al método
        this.marca = NuevaMarca;
        this.modelo = NuevoModelo;
    }

    MostrarDatos(): void {
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}`);
    }
}

const celular = new Articulo ("Samsung", "Galaxy S23");

celular.MostrarDatos(); //llamo a la funcion mostrar datos (metodo mejor dicho)
