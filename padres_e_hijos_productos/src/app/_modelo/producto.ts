export class Producto{

    id:number=0
    nombre:string=""
    cantidad:number=0
    precio:number=0
    tipo:TipoProducto

    constructor(id:number,nombre:string,cantidad:number,precio:number,tipo:TipoProducto){
        this.id=id
        this.nombre=nombre
        this.cantidad=cantidad
        this.precio=precio
        this.tipo=tipo
    }
}

export enum TipoProducto{
    alimentos="alimentos",
    limpieza="limpieza",
    bebidas="bebidas"
}