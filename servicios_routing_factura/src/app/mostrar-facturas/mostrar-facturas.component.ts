import { Component } from '@angular/core';
import { CrudService } from '../crud.service';
import { Factura } from 'src/_modelo/factura';


@Component({
  selector: 'app-mostrar-facturas',
  templateUrl: './mostrar-facturas.component.html',
  styleUrls: ['./mostrar-facturas.component.css']
})
export class MostrarFacturasComponent {
  darAlta:boolean=false
  darBaja:boolean=false
  modificar:boolean=false
  mensaje_confirmar:boolean=false
  id:number=0
  factura:Factura


  constructor(public listaServicio: CrudService){
    this.factura=new Factura(0,0,0)
  }

  alta(){
    this.darAlta=true
    this.darBaja=false
    this.modificar=false
  }
  baja(){
    this.darBaja=true
    this.darAlta=false
    this.modificar=false
  }
  _modificar(){
    this.modificar=true
    this.darBaja=false
    this.darAlta=false
  }
  confirmarBaja(){
    this.mensaje_confirmar=true

    if(confirm("¿Estás seguro?")) {
      this.listaServicio.baja(this.factura.idFactura)
    }
    else{
      this.mensaje_confirmar=false
    }
  }
}
