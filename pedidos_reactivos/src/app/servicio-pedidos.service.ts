import { Injectable } from '@angular/core';
import { Pedido } from './_modelo/pedido';
import { DetallePedido } from './_modelo/detallepedido';
DetallePedido
@Injectable({
  providedIn: 'root'
})
export class ServicioPedidosService {
  pedidos:Pedido[]=[]
  detalle:DetallePedido[]=[]
  productos:DetallePedido[]=[]

  constructor() { }

  altaDefinitiva(forma:string,direccion:string){
    let pedido = new Pedido(forma,direccion)
    this.pedidos.push(pedido)

    for (let i = 0; i < this.productos.length; i++) {
      
      if(this.productos[i].idPedido==null){
        this.productos[i].idPedido=pedido.idPedido
      }
    }
    this.detalle=this.productos
  }

  altaAuxiliar(idProducto:number,cantidad:number){
    this.productos.push(new DetallePedido(null,idProducto,cantidad))
  }
}