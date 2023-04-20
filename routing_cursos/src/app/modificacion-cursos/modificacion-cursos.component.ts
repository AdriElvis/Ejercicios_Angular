import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudCursosService } from '../crud-cursos.service';
import { Curso, Nivel } from 'src/_modelo/curso';

@Component({
  selector: 'app-modificacion-cursos',
  templateUrl: './modificacion-cursos.component.html',
  styleUrls: ['./modificacion-cursos.component.css']
})
export class ModificacionCursosComponent {
  id:number=0
  niveles:Nivel[]=Object.values(Nivel)
  curso:Curso = new Curso("",0,Nivel.iniciacion)

  constructor(public listaCursos:CrudCursosService,private route:ActivatedRoute, private router: Router){
    this.route.params.subscribe(params => {this.id = params['id']})
  }


  volver(){
    this.router.navigate(['/'])
  }
}
