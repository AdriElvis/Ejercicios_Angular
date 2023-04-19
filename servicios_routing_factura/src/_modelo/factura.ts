export class Factura{
    static cont=0
    idFactura:number
    idCliente:number=0
    totalFactura:number=0
    iva:number=0

    constructor(idCliente:number, totalFactura:number, iva:number){
        this.idFactura=++Factura.cont
        this.idCliente=idCliente
        this.totalFactura=totalFactura
        this.iva=iva
    }
}