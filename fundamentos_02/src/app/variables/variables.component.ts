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
    let cadena1:string = "Cadena de texto con comillas dobles";
    let cadena2:string = 'Cadena de texto con comillas simples';
    let nombre:string = 'Adrián'
    let trabajo:string = 'estudiante'
    let cadena3:string = `${nombre} es un ${trabajo}`
    let booleano:boolean = true;
    let cualquiera:any =75;
    let desconocido:unknown="tipo desconocido";

    console.log("El tipo de variable es ",typeof numero, " y el valor es ",numero);
    console.log("El tipo de variable es ",typeof cadena1, " y el valor es ",cadena1);
    console.log("El tipo de variable es ",typeof cadena2, " y el valor es ",cadena2);
    console.log("El tipo de variable es ",typeof cadena3, " y el valor es ",cadena3);
    console.log("El tipo de variable es ",typeof booleano, " y el valor es ",booleano);
    console.log("El tipo de variable es ",typeof cualquiera, " y el valor es ",cualquiera);
    console.log("El tipo de variable es ",typeof desconocido, " y el valor es ",desconocido);
  }

}
