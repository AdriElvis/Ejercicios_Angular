import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicioPedidosService } from '../servicio-pedidos.service';

@Component({
  selector: 'app-agregar-detalles',
  templateUrl: './agregar-detalles.component.html',
  styleUrls: ['./agregar-detalles.component.css']
})
export class AgregarDetallesComponent {
  formu: FormGroup = new FormGroup({});
  idPedido:number=0
  productos:number=0
  forma:string=""
  direccion:string=""

  constructor(private llevar:Router,private recoger:ActivatedRoute, public servicio:ServicioPedidosService){}

  ngOnInit(){
    this.recoger.queryParams.subscribe(data => {this.idPedido = data['idPedido'];this.forma = data['forma'];this.direccion = data['direccion']})

    this.formu = new FormGroup({
      idProducto: new FormControl(),
      cantidad: new FormControl()
      })
  }

  aniadir(){
    if((this.formu.value.idProducto==null && this.formu.value.cantidad==null) ||(this.formu.value.cantidad==0 && this.formu.value.idProducto==0)){
      alert("Complete todos los campos")
    }
    else{
      this.servicio.altaAuxiliar(this.formu.value.idProducto,this.formu.value.cantidad)
      this.productos++
      alert("Producto añadido")
    }

  }

  volver(){
    this.llevar.navigate([''],{queryParams:{finalizar:1,forma:this.forma,direccion:this.direccion}})
  }
}
