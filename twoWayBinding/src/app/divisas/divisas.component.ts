import { Component } from '@angular/core';

@Component({
  selector: 'app-divisas',
  templateUrl: './divisas.component.html',
  styleUrls: ['./divisas.component.css']
})
export class DivisasComponent {
  cantidad:number=0;
  moneda:string="";
  resultado:number=0;

  convertir(){

    switch (this.moneda) {
      case "libra":
        this.resultado=this.cantidad*0.88;
          alert(this.resultado+" Libras esterlinas")
        break;
      
      case "dolar":
        this.resultado=this.cantidad*1.10;
          alert(this.resultado+" Dólares estadounidenses")
        break;

      case "pesos":
        this.resultado=this.cantidad*0.88;
          alert(this.resultado+" Pesos argentinos")
        break;
        
      default:
        break;
    }

  }
}
