import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario-compra',
  templateUrl: './formulario-compra.component.html',
  styleUrls: ['./formulario-compra.component.css']
})
export class FormularioCompraComponent {
  correo:string=""
  direccion:string=""
  telefono:string=""
  comunidad:string=""
  pago:string=""
  acepta:boolean=false
  info:string=""

  mostrar(){
    this.info="Correo: "+this.correo+
    "\nDirección: "+this.direccion+
    "\nTelefono:"+ this.telefono+
    "\nComunidad:"+ this.comunidad+
    "\nForma de pago:"+ this.pago+
    "\nAcepta Recibir información de nuestros productos:"+(this.acepta?"sí":"no")
  }
}

