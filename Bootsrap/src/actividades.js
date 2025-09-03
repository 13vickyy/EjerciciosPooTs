"use strict";
//1. Crear una clase Persona que tenga los atributos públicos nombre y apellido.
//● Crear una instancia y asignarle valores.
//● Mostrar por pantalla los valores asignados.
Object.defineProperty(exports, "__esModule", { value: true });
/*class Persona { //CLASE PERSONA
    public nombre: string; //ATRIBUTOS PUBLICOS
    public apellido: string; //ATRIBUTOS PUBLICOS

    constructor (nombre: string, apellido: string){ //Creo la funcion que ejecuta el nuevo objeto (aun no creado)
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

const Juan = new Persona ("Juan", "Fernandez"); //nueva instancia y le asigno los valores juan y fernandez

console.log(`Nombre: ${Juan.nombre}, Apellido: ${Juan.apellido}`);*/
/*2. Crear una clase Vehiculo que tenga los atributos públicos marca, modelo y un atributo privado
patente.
● Crear una instancia y asignarle valores; notar que el atributo privado no está disponible
para la asignación de valores.
● Mostrar por pantalla los valores asignados.*/
/*class vehiculo {
    public marca: string;
    public modelo: string;
    private patente: string;

    constructor (marca: string, modelo: string, patente: string){
        this.marca = marca;
        this.modelo = modelo;
        this.patente = patente;
    }
}
const auto = new vehiculo ("Peugeot","207 xt", "HUO 750")

console.log(`Marca: ${auto.marca}, Modelo: ${auto.modelo}, Patente: ${auto.patente}`);*/
/*3. Crear una clase Articulo que tenga los atributos privados marca y modelo.
● Crear métodos públicos para la asignación de valores.
● Crear una instancia y asignarle valores.
● Notar que no es posible mostrar los valores por pantalla y analizar el motivo por lo que
esto ocurre.*/
/*class Articulo{
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

celular.MostrarDatos(); //llamo a la funcion mostrar datos (metodo mejor dicho)*/
/*4. Crear una clase Cine que tenga los atributos privados película y horario:
● Crear métodos públicos para la asignación y recuperación de valores.
● Crear un método público obtenerCartelera() que devuelva el nombre de la película y el
horario.
● Crear una instancia y asignarle valores.
● Mostrar por pantalla los valores.*/
/*class cine {
    private pelicula: string;
    private horario: string;

    constructor (pelicula: string, horario: string){
        this.pelicula = pelicula;
        this.horario = horario;
    
    }
    AsignarValores(NuevaPelicula: string, NuevoHorario: string): void {
        this.pelicula = NuevaPelicula; // this.pelicula es el privado, y yo le asigno un nuevo valor con este metodo nuevo AsignarValores
        this.horario = NuevoHorario; // o sea...Cambia el valor
    }
    ObtenerCartelera(): void{
        console.log(`Pelicula: ${this.pelicula}, Horario: ${this.horario}`)
    }
}
const CineHoy = new cine("Sonrie 2", "22:00hs");

    console.log(CineHoy.ObtenerCartelera())*/ 
//# sourceMappingURL=actividades.js.map