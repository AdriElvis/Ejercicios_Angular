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
  nombre:string=""
  duracion:number=0
  nivel:Nivel=Nivel.avanzado

  niveles:Nivel[]=Object.values(Nivel)
  recibo:boolean=false

  constructor(public listaCursos:CrudCursosService,private route:ActivatedRoute, private router: Router){
    this.id=this.route.snapshot.queryParams["id"]
    this.nombre=this.route.snapshot.queryParams["nombre"]
    this.duracion=this.route.snapshot.queryParams["duracion"]
    this.nivel=this.route.snapshot.queryParams["nivel"]

    if(this.id!=null){
      this.recibo=true
    }
  }

  volver(){
    this.router.navigate(['/'])
  }
}
