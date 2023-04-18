import { Component, EventEmitter, Output } from '@angular/core';
import { Pedido } from '../_modelo/pedido';

@Component({
  selector: 'app-form-pedidos-hijo',
  templateUrl: './form-pedidos-hijo.component.html',
  styleUrls: ['./form-pedidos-hijo.component.css']
})
export class FormPedidosHijoComponent {
  pedido:Pedido
  pedidos:Pedido[]=[]
  @Output() pedidoEnviado = new EventEmitter<Pedido[]>()

  constructor(){
    this.pedido = new Pedido(0,"",0,0)
  }

  enviarPedidos(){
    this.pedidos.push(new Pedido(this.pedido.idCliente,this.pedido.nombreCliente,this.pedido.totalProductos,this.pedido.importeTotal))
    this.pedidoEnviado.emit(this.pedidos)
  }
}
