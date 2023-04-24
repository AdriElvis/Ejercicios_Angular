import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recibir-parametros',
  templateUrl: './recibir-parametros.component.html',
  styleUrls: ['./recibir-parametros.component.css']
})
export class RecibirParametrosComponent {
  nombre1:string
  nombre2:string

  constructor(public route:ActivatedRoute){
    this.nombre1=this.route.snapshot.queryParams['nombre1']
    this.nombre2=this.route.snapshot.queryParams['nombre2']
  }
}
