export class Pedido{
    static contador=0
    idPedido:number
    idCliente:number
    forma_de_pago:string=""
    direccion:string=""
   
   constructor(forma_de_pago:string,direccion:string){
    ++Pedido.contador
    this.idPedido=Pedido.contador
    this.idCliente=Pedido.contador
    this.forma_de_pago=forma_de_pago
    this.direccion=direccion
   }
}