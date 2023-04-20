import { Injectable } from '@angular/core';
import { Curso, Nivel } from 'src/_modelo/curso';

@Injectable({
  providedIn: 'root'
})
export class CrudCursosService {

  listaCursos:Curso[]=[new Curso("DAW",155,Nivel.iniciacion),new Curso("DAM",155,Nivel.iniciacion), new Curso("ASIR",155,Nivel.iniciacion)]
  
  constructor(){

  }

  modificar(id:number, nombre:string, horas:number, nivel:Nivel){
    let indice = this.listaCursos.findIndex((p:Curso) => p.idCurso == id)

    if(indice>=0){
      this.listaCursos[indice].nombre=nombre
      this.listaCursos[indice].duracion=horas
      this.listaCursos[indice].nivel=nivel
    }
  }

  leer(){
    return this.listaCursos
  }
}
