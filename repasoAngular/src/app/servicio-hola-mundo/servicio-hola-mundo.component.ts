import { Component } from '@angular/core';
import { HolaMundoService } from '../hola-mundo.service';

@Component({
  selector: 'app-servicio-hola-mundo',
  templateUrl: './servicio-hola-mundo.component.html',
  styleUrls: ['./servicio-hola-mundo.component.css']
})
export class ServicioHolaMundoComponent {

  mensaje:string=""

  constructor(public mensajeServicio: HolaMundoService){
  }

  click(){
    this.mensaje=this.mensajeServicio.leerMensaje()
  }
}
