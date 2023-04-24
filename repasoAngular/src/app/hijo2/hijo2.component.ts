import { Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-hijo2',
  templateUrl: './hijo2.component.html',
  styleUrls: ['./hijo2.component.css']
})
export class Hijo2Component {
  mensaje1:string="Hola padre mío"
  
  @Output() mensajeEnviado = new EventEmitter<string>()

  enviar(){
    this.mensajeEnviado.emit(this.mensaje1)
  }
}
