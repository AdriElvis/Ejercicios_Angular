import { Component } from '@angular/core';
import { CrudService } from '../crud.service';
import { Factura } from 'src/_modelo/factura';


@Component({
  selector: 'app-mostrar-facturas',
  templateUrl: './mostrar-facturas.component.html',
  styleUrls: ['./mostrar-facturas.component.css']
})
export class MostrarFacturasComponent {
  lista:Factura[]=[]
  
  factura:Factura = new Factura(0,0,0)
  constructor(public listaServicio: CrudService){
  }
  
}
