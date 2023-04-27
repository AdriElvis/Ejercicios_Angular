export class DetallePedido{

    idPedido:number=0
    idProducto:number=0
    cantidad:number=0

    constructor(idPedido:number,idProducto:number,cantidad:number){
        this.idPedido=idPedido
        this.idProducto=idProducto
        this.cantidad=cantidad
    }
}