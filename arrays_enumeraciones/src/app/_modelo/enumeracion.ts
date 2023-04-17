export class Factura{

    nombre:string=""
    dni:string=""
    videojuego:Videojuegos=Videojuegos.mario
    precio:number=0

    constructor(nombre:string,dni:string,videojuego:Videojuegos){
        this.nombre=nombre
        this.dni=dni
        this.videojuego=videojuego
    }

    mostrar(){
        return "Nombre: "+this.nombre+"\nDNI:"+this.dni+"\nVideojuego: "+this.videojuego+"\nPrecio: "+this.precio+" €"
    }
}
export enum Videojuegos{
    mario=55,
    spy=25,
    kings=19,
    pacmanpro=10
}