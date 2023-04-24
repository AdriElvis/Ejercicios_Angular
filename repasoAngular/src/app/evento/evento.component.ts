import { Component } from '@angular/core';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css']
})
export class EventoComponent {
  mensaje:string=""

  haciendoClick(){
    this.mensaje="Hiciste click"
  }
}
