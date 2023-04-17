import { Component } from '@angular/core';
import { Factura, Videojuegos } from '../_modelo/factura';

@Component({
  selector: 'app-union-directiva',
  templateUrl: './union-directiva.component.html',
  styleUrls: ['./union-directiva.component.css']
})
export class UnionDirectivaComponent {
  
  juegos = Object.values(Videojuegos).filter(v=> typeof v === 'string')
  info:string=""
  crear:boolean=false
  instancia: Factura = new Factura("","normal","",Videojuegos.mario)

  generarFactura(){
    this.crear=true
  }
  mostrar(){
    if(this.instancia.cliente=="premium")
    {
      this.instancia.precio=parseInt(Videojuegos[this.instancia.videojuego])-5
    }
    this.info=this.instancia.mostrar()
  }
}
