import { Component } from '@angular/core';

@Component({
  selector: 'app-twowaybinding',
  templateUrl: './twowaybinding.component.html',
  styleUrls: ['./twowaybinding.component.css']
})
export class TwowaybindingComponent {
  nombre:string=""
  mensaje:string="Buenos días "

  enviar(){
    this.mensaje=this.mensaje+this.nombre
  }
}
