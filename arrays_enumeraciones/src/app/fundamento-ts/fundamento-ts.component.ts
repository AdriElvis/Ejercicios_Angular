import { Component } from '@angular/core';

@Component({
  selector: 'app-fundamento-ts',
  templateUrl: './fundamento-ts.component.html',
  styleUrls: ['./fundamento-ts.component.css']
})
export class FundamentoTSComponent {

  numeros1:number[]=[4,5]
  numeros2:number[]=[-2,2]
  resultado:any

  ngOnInit():void
  {
    this.anadir()
    console.log(" ")
    this.eliminar()
    console.log(" ")
    this.concatenar()
    console.log(" ")
    this.recorrer()
    console.log(" ")
    this.encontrar()
  }

  //Añadir un numero al array
  anadir(){
    console.log("Antes de añadir: "+this.numeros1)
    this.numeros1.push(1)
    console.log("Después de añadir: "+this.numeros1)
  }
  
  //Añadir un numero al array
  eliminar(){
    console.log("Antes de eliminar: "+this.numeros1)
    this.numeros1.pop()
    console.log("Después de eliminar: "+this.numeros1)
  }

  //concatenar arrays
  concatenar(){
    console.log("Antes de concatenar: "+this.numeros1+" con "+this.numeros2)
    this.resultado = this.numeros1.concat(this.numeros2); 
    console.log("Después de la concatenación: "+this.resultado)
  }

  //recorrer array
  recorrer(){
    var num:number=0
    console.log("Vamos a recorrer un array:")
    this.numeros1.forEach(function (value) {
      console.log("Posicion "+num+": "+value);
      num++
    })
  }

  //donde se encuentra
  encontrar(){
    console.log("Buscaremos la posición del índice donde está el número dos")
    this.numeros2.indexOf(2)
  }
}
