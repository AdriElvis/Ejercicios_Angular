import { Component } from '@angular/core';

@Component({
  selector: 'app-onewaybinding',
  templateUrl: './onewaybinding.component.html',
  styleUrls: ['./onewaybinding.component.css']
})
export class OnewaybindingComponent {
  aceptado:boolean=false
  mensaje:string=""

  check(){
    this.aceptado=true
    
    if(this.aceptado){
      this.mensaje="Has aceptado"
    }
  }
}
