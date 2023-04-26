import { Injectable } from '@angular/core';
import { Alumnos } from '../app/_modelo/alumno';
import { Observable,of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServicioAlumnosService {
  static contador=4
  id:number=0
  alumnos:Alumnos[]=[
    {id:1,dni:"aaaaaa",nombre:"Javi",horas:10},
    {id:2,dni:"bbbbbb",nombre:"Adri",horas:5},
    {id:3,dni:"cccccc",nombre:"Luis",horas:8}
  ]

  constructor() { 

  }

  buscar(id:number):Observable<Alumnos>{
    
    let indice = this.alumnos.findIndex((p:Alumnos) => p.id == id)
    
    return of(this.alumnos[indice])
    
  }


  mostrar():Observable<Alumnos[]>{
    
    return of(this.alumnos)
  }

  modificar(id:number,dni:string,nombre:string,horas:number){
    let indice = this.alumnos.findIndex((p:Alumnos) => p.id == id)
    console.log(indice)
    if(indice){
      this.alumnos[indice].dni=dni
      this.alumnos[indice].nombre=nombre
      this.alumnos[indice].horas=horas
    }
  }

  alta(dnis:string,nombres:string,horass:number ){
    this.id=++ServicioAlumnosService.contador
    let alumno:Alumnos={id:this.id,dni:dnis,nombre:nombres,horas:horass}
    this.alumnos.push(alumno)
  }
}
