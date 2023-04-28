import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicioPedidosService } from '../servicio-pedidos.service';

@Component({
  selector: 'app-agregar-pedido',
  templateUrl: './agregar-pedido.component.html',
  styleUrls: ['./agregar-pedido.component.css']
})
export class AgregarPedidoComponent {
  formu: FormGroup = new FormGroup({});
  finalizar:number=0
  idPedido:number=0
  forma:string=""
  direccion:string=""

  constructor(private recoger:ActivatedRoute,private llevar:Router, public servicio:ServicioPedidosService){
      this.recoger.queryParams.subscribe(data => {this.finalizar = data['finalizar'];this.forma = data['forma'];this.direccion = data['direccion']})
      if(this.finalizar==undefined){
        this.finalizar=0
      }
  }

  ngOnInit(){
    this.formu = new FormGroup({
      forma: new FormControl(),
      direccion: new FormControl(),
      })
  }

  enviar(){
    if(this.finalizar==0){
      if(this.formu.value.forma==null || this.formu.value.forma=="" || this.formu.value.direccion==null || this.formu.value.direccion==""){
        alert("Complete todos los campos")
      }
      else{
        this.llevar.navigate(['detalles'],{queryParams:{forma:this.formu.value.forma,direccion:this.formu.value.direccion}})
        
      }
      
    }
    else{
      this.servicio.altaDefinitiva(this.forma,this.direccion)
      this.finalizar=0
    }
  }
}