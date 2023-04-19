import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactarComponent } from './contactar/contactar.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { MostrarFacturasComponent } from './mostrar-facturas/mostrar-facturas.component';

export const routes: Routes = [ { path: '', component: QuienesSomosComponent },
{ path: 'contactar', component: ContactarComponent },
{ path: 'mostrar-facturas', component: MostrarFacturasComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
