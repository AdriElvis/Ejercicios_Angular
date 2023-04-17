import { Component } from '@angular/core';
import { Factura, Videojuegos } from '../_modelo/enumeracion';

@Component({
  selector: 'app-enumeracion',
  templateUrl: './enumeracion.component.html',
  styleUrls: ['./enumeracion.component.css']
})
export class EnumeracionComponent {
  info:string=""
  instancia: Factura = new Factura("","",Videojuegos.mario)

  mostrar(){
    this.instancia.precio=parseInt(Videojuegos[this.instancia.videojuego])
    this.info=this.instancia.mostrar()
  }
}
