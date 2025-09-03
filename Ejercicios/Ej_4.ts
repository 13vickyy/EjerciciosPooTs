/*4. Crear una clase Cine que tenga los atributos privados película y horario:
● Crear métodos públicos para la asignación y recuperación de valores.
● Crear un método público obtenerCartelera() que devuelva el nombre de la película y el
horario.
● Crear una instancia y asignarle valores.
● Mostrar por pantalla los valores.*/

class cine {
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

    console.log(CineHoy.ObtenerCartelera())