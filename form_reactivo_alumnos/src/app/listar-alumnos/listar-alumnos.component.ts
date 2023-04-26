import { Component,OnInit } from '@angular/core';
import { ServicioAlumnosService } from '../servicio-alumnos.service';
import { Alumnos } from '../_modelo/alumno';
import { Router } from '@angular/router';


@Component({
  selector: 'app-listar-alumnos',
  templateUrl: './listar-alumnos.component.html',
  styleUrls: ['./listar-alumnos.component.css']
})
export class ListarAlumnosComponent implements OnInit{

  alumnos:Alumnos[]

  constructor(public listadoServicio:ServicioAlumnosService, public router:Router){
    
  }
  ngOnInit(): void {
    this.listadoServicio.mostrar().subscribe(data => {this.alumnos = data})
  }

  encontrar(){
    this.router.navigate(['buscar'],{queryParams:{encontrar:1}})
  }

  alta(){
    this.router.navigate(['alta'],{queryParams:{encontrar:2}})
  }
}
