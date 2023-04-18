import { Component } from '@angular/core';
import { Pedido } from '../_modelo/pedido';


@Component({
  selector: 'app-lista-pedidos-padre',
  templateUrl: './lista-pedidos-padre.component.html',
  styleUrls: ['./lista-pedidos-padre.component.css']
})
export class ListaPedidosPadreComponent {
  pedidosLista:Pedido[]=[]

  anadir(pedidos:any){
    this.pedidosLista=pedidos
  }
}
