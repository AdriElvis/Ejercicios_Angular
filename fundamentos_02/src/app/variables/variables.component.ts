import { Component } from '@angular/core';

@Component({
  selector: 'app-variables',
  templateUrl: './variables.component.html',
  styleUrls: ['./variables.component.css']
})
export class VariablesComponent {

  ngOnInit():void
  {
    this.imprimirTipos();
  }

  imprimirTipos()
  {
    let numero:number = 1;
    let cadena:string = "Cadena de texto";
    let booleano:boolean = true;
    let cualquiera:any =75;
    let desconocido:unknown="tipo desconocido";

    console.log("El tipo de variable es ",typeof numero, " y el valor es ",numero);
    console.log("El tipo de variable es ",typeof cadena, " y el valor es ",cadena);
    console.log("El tipo de variable es ",typeof booleano, " y el valor es ",booleano);
    console.log("El tipo de variable es ",typeof cualquiera, " y el valor es ",cualquiera);
    console.log("El tipo de variable es ",typeof desconocido, " y el valor es ",desconocido);
  }

}
