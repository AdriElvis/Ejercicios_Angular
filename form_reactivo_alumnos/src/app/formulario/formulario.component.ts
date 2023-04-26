import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Alumnos } from '../_modelo/alumno';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicioAlumnosService } from '../servicio-alumnos.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  formu: FormGroup = new FormGroup({});
  id:number=0
  dni:string=""
  nombre:string=""
  horas:number=0
  static contador:number=0
  alumno:Alumnos
  encontrar:number=0
  existe:number=0
  mensaje:string=""

  constructor(private router:ActivatedRoute, public servicio:ServicioAlumnosService){

  }

  ngOnInit(){
    
    this.router.queryParams.subscribe(data => {this.encontrar = data['encontrar'];this.id = data['id'];this.dni = data['dni'];this.nombre = data['nombre'];this.horas = data['horas']})

    this.formu = new FormGroup({
      id: new FormControl(this.id),
      dni: new FormControl(this.dni),
      nombre: new FormControl(this.nombre),
      horas: new FormControl(this.horas),
      })
    
  }

  enviar(){
    if(this.encontrar==1){

      this.servicio.buscar(this.formu.value.id).subscribe(data => {this.alumno = data})

      if(this.alumno!=undefined){
        this.mensaje="Nombre: "+this.alumno.nombre+" DNI: "+this.alumno.dni+" Horas: "+this.alumno.horas
      }

    }
    else if(this.encontrar==0){

      this.servicio.modificar(this.formu.value.id,this.formu.value.dni,this.formu.value.nombre,this.formu.value.horas)
    }
    else if(this.encontrar==2){
      this.servicio.alta(this.formu.value.dni,this.formu.value.nombre,this.formu.value.horas)
    }
  }
}
