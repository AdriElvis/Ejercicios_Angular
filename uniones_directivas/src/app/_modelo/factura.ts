export class Factura{

    nombre:string=""
    cliente:"normal"|"premium"="normal"
    dni:string=""
    videojuego:Videojuegos=Videojuegos.mario
    precio:number=0

    constructor(nombre:string,cliente:"normal"|"premium",dni:string,videojuego:Videojuegos){
        this.nombre=nombre
        this.cliente=cliente
        this.dni=dni
        this.videojuego=videojuego
    }

    mostrar(){
        return "Nombre: "+this.nombre+" Cliente: "+this.cliente+" DNI:"+this.dni+" Videojuego: "+this.videojuego+" Precio: "+this.precio
    }
}
export enum Videojuegos{
    mario=55,
    spy=25,
    kings=19,
    pacmanpro=10
}