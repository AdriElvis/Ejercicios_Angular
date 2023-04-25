import { Component } from '@angular/core';
import { CrudCursosService } from '../crud-cursos.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-listado-cursos',
  templateUrl: './listado-cursos.component.html',
  styleUrls: ['./listado-cursos.component.css']
})
export class ListadoCursosComponent {

  constructor(public listaCursos:CrudCursosService){

  }
}
