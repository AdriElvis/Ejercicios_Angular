export class Pedido{
    static cont=0
    idPedido:number=0
    idCliente:number=0
    nombreCliente:string=""
    totalProductos:number=0
    importeTotal:number=0

    constructor(idCliente:number, nombreCliente:string, totalProductos:number, importeTotal:number){
        this.idPedido=++Pedido.cont
        this.idCliente=idCliente
        this.nombreCliente=nombreCliente
        this.totalProductos=totalProductos
        this.importeTotal=importeTotal
    }
}