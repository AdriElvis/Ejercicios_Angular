import { Component } from '@angular/core';

@Component({
  selector: 'app-fundamento-ts',
  templateUrl: './fundamento-ts.component.html',
  styleUrls: ['./fundamento-ts.component.css']
})
export class FundamentoTSComponent {

  numeros1:number[]=[]
  numeros2:number[]=[-2,2]
  resultado:any

  //Añadir un numero al array
  anadir(){
    this.numeros1.push(1)
  }
  
  //Añadir un numero al array
  eliminar(){
    this.numeros1.pop()
  }

  //concatenar arrays
  concatenar(){
    this.resultado = this.numeros1.concat(this.numeros2); 
  }

  //recorrer array
  recorrer(){
    this.numeros2.forEach(function (value) {
      console.log(value);
    }); 
  }

  //donde se encuentra
  encontrar(numero:any){
    this.numeros2.indexOf(numero);
  }
}
