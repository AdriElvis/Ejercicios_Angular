import { Component } from '@angular/core';
import { Paciente } from '../_modelo/paciente';

@Component({
  selector: 'app-lista-paciente',
  templateUrl: './lista-paciente.component.html',
  styleUrls: ['./lista-paciente.component.css']
})
export class ListaPacienteComponent {

  pacientesLista:Paciente[]=[]
  hayPacientes:boolean=false

  anadir(paciente:Paciente){
    this.pacientesLista.push(new Paciente(paciente.nombre,paciente.apellidos))
    this.hayPacientes=true
  }
}
