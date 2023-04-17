import { Component } from '@angular/core';

@Component({
  selector: 'app-fundamentos',
  templateUrl: './fundamentos.component.html',
  styleUrls: ['./fundamentos.component.css']
})
export class FundamentosComponent {
  fundamentos = "fundamentos de Angular"
  cadena:string="Haz click"
  n:number=0

  oneWayBinding(){
    this.n++;
    this.cadena="Hiciste click "+this.n+" veces";
  }
}
