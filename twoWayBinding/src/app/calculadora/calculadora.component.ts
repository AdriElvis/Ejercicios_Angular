import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
  num1:number=0;
  num2:number=0;
  resultado:number=0;

  mostrarSuma(){
    this.resultado=this.num1+this.num2;
    alert("La suma es: "+this.resultado)
  }

  mostrarResta(){
    this.resultado=this.num1-this.num2;
    alert("La suma es: "+this.resultado)
  }

  mostrarMultiplicacion(){
    this.resultado=this.num1*this.num2;
    alert("La suma es: "+this.resultado)
  }

  mostrarDivision(){
    this.resultado=this.num1/this.num2;
    alert("La suma es: "+this.resultado)
  }
}
