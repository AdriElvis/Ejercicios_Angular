import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarPedidoComponent } from './agregar-pedido/agregar-pedido.component';
import { AgregarDetallesComponent } from './agregar-detalles/agregar-detalles.component';



const routes: Routes = [{path:"", component:AgregarPedidoComponent},
{path:"detalles", component:AgregarDetallesComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
