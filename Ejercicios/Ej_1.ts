//1. Crear una clase Persona que tenga los atributos públicos nombre y apellido.
//● Crear una instancia y asignarle valores.
//● Mostrar por pantalla los valores asignados.

class Persona { //CLASE PERSONA
    public nombre: string; //ATRIBUTOS PUBLICOS
    public apellido: string; //ATRIBUTOS PUBLICOS

    constructor (nombre: string, apellido: string){ //Creo la funcion que ejecuta el nuevo objeto (aun no creado)
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

const Juan = new Persona ("Juan", "Fernandez"); //nueva instancia y le asigno los valores juan y fernandez

console.log(`Nombre: ${Juan.nombre}, Apellido: ${Juan.apellido}`);
