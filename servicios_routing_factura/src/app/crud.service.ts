import { Injectable } from '@angular/core';
import { Factura } from 'src/_modelo/factura';

@Injectable({
  providedIn: 'root'
})

export class CrudService {

  lista:Factura[]=[]

  alta(idCliente:number, totalFactura:number, iva:number){
    let factura = new Factura (idCliente,totalFactura,iva)
    this.lista.push(factura)
  }

  baja(id:number){
    var indice = this.lista.findIndex(factura => factura.idFactura===id )
    
    if(indice>=0){
      this.lista.splice(indice,1)
    }
  }

  modificar(idFactura:number,idCliente:number,totalFactura:number,iva:number){
    var indice = this.lista.findIndex(factura => factura.idFactura===idFactura )
    if(indice>=0){
      this.lista[indice].idCliente=idCliente
      this.lista[indice].totalFactura=totalFactura
      this.lista[indice].iva=iva
    }
  }

  consultar(){
    return this.lista
  }
  
}
