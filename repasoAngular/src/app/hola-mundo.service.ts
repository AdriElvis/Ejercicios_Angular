import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HolaMundoService {

  mensaje:string="Hola Mundo"

  leerMensaje(){
    return this.mensaje
  }
}
