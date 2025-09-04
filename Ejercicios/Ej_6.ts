/*6. Crear una clase Fruta con variables privadas color, peso, esEstacional.
● Crear setters y getters.
● Escribir una función llamada esComestible() que devuelva verdadero cuando la
fruta pesa menos de 200 gr y es de estación, y falso en cualquier otro caso.
● Definir dos constructores de modo tal que la fruta pueda crearse con los valores
color, peso y estacional al momento de instanciarse, o bien crearse sin valores
iniciales.*/

class Fruta{
    private color: string;
    private peso: number;
    private esEstacional: boolean;

    constructor(color:string,peso:number,esEstacional:boolean){
        this.color=color;
        this.peso=peso;
        this.esEstacional=esEstacional;
    }

    public getcolor():string{
        return this.color;
    }
    public getpeso():number{
        return this.peso;
    }
    public getesEstacional():boolean{
        return this.esEstacional;
    }

        public setcolor(nuevoColor:string): void{
            this.color=nuevoColor;
        }
        public setpeso(nuevoPeso:number): void{
            this.peso=nuevoPeso;
        }
        public setesEstacional(nuevoEsEstacional:boolean): void{
            this.esEstacional=nuevoEsEstacional;
        }

        esComestible():boolean
}
