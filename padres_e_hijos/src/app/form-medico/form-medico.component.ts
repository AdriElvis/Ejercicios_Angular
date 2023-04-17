import { Component } from '@angular/core';
import { Medico } from '../_modelo/medico';

@Component({
  selector: 'app-form-medico',
  templateUrl: './form-medico.component.html',
  styleUrls: ['./form-medico.component.css']
})
export class FormMedicoComponent {

  medicos1:Medico

  constructor(){
    this.medicos1=new Medico("","",0,"")
  }
}
