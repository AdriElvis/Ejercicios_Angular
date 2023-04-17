import { Component } from '@angular/core';
import { Bicicleta } from '../_modelo/bicicleta';

@Component({
  selector: 'app-formulario-bicicleta',
  templateUrl: './formulario-bicicleta.component.html',
  styleUrls: ['./formulario-bicicleta.component.css']
})
export class FormularioBicicletaComponent {
  
  numero:number=0;
  info:string="";
  bicicleta: Bicicleta = new Bicicleta("","",0,0,0,false);

  mostrar(){
    this.info=this.bicicleta.mostrar();
  }
}
