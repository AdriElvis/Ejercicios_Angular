import { Component } from '@angular/core';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent {

  operaciones:string[]=["sumar","restar","multiplicar"]
  eleccion:string=""
  numero1:number=0
  numero2:number=0
  clickea:boolean=false
  mensaje:string="hiciste click"
  
  haceCLick(){
    this.clickea=true
  }
}
