import { Component } from '@angular/core';
import { Producto, TipoProducto } from '../_modelo/producto';

@Component({
  selector: 'app-form-productos',
  templateUrl: './form-productos.component.html',
  styleUrls: ['./form-productos.component.css']
})
export class FormProductosComponent {
  producto:Producto
  productos1:Producto[]=[]
  tipos= Object.values(TipoProducto)
  nombre:string=""

  constructor(){
    this.producto=new Producto(0,"",0,0,TipoProducto.alimentos)
  }
  
  anadir(){
    this.productos1.push(new Producto(this.producto.id,this.producto.nombre,this.producto.cantidad,this.producto.precio,this.producto.tipo))
  }
}
