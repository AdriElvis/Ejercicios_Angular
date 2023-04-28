import { Injectable } from '@angular/core';
import { Menu } from './_modelo/menu';


@Injectable({
  providedIn: 'root'
})
export class ServicioMenuService {
  
  menu:Menu[]=[
    new Menu("home","Inicio",""),
    new Menu("person_add","Login","/login"),
    new Menu("assignment_turned_in","Contenido","/contenido"),
    new Menu("contact_mail","Contacto","/contacto"),
  ]

  constructor() { }

  mostrar(){
    return this.menu
  }
}
