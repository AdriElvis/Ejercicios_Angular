import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventoComponent } from './evento/evento.component';
import { InterpolacionComponent } from './interpolacion/interpolacion.component';
import { OnewaybindingComponent } from './onewaybinding/onewaybinding.component';
import { ServicioHolaMundoComponent } from './servicio-hola-mundo/servicio-hola-mundo.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { DirectivasComponent } from './directivas/directivas.component';
import { PasarIdComponent } from './pasar-id/pasar-id.component';
import { RecibirIdComponent } from './recibir-id/recibir-id.component';
import { PasarParametrosComponent } from './pasar-parametros/pasar-parametros.component';
import { RecibirParametrosComponent } from './recibir-parametros/recibir-parametros.component';


const routes: Routes = [{path:"interpolacion", component:InterpolacionComponent},
{path:"one-way-binding", component:OnewaybindingComponent},
{path:"evento", component:EventoComponent},
{path:"two-way-binding", component:TwowaybindingComponent},
{path:"servicio", component:ServicioHolaMundoComponent},
{path:"directivas", component:DirectivasComponent},
{path:"pasar_id", component:PasarIdComponent},
{path:"recibir_id/:id", component:RecibirIdComponent},
{path:"pasar_parametros", component:PasarParametrosComponent},
{path:"recibir_parametros", component:RecibirParametrosComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
