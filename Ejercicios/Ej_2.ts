/*2. Crear una clase Vehiculo que tenga los atributos públicos marca, modelo y un atributo privado
patente.
● Crear una instancia y asignarle valores; notar que el atributo privado no está disponible
para la asignación de valores.
● Mostrar por pantalla los valores asignados.*/

class vehiculo {
    public marca: string;
    public modelo: string;
    private patente: string; 

    constructor (marca: string, modelo: string, patente: string){
        this.marca = marca;
        this.modelo = modelo;
        this.patente = patente;
    }
    public getpatente():string{
        return this.patente;
    }
}

const auto = new vehiculo ("Peugeot","207 xt","AAA 999")

console.log(`Marca: ${auto.marca}, Modelo: ${auto.modelo}, Patente: ${auto.getpatente}`);