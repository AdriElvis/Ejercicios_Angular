import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterpolacionComponent } from './interpolacion/interpolacion.component';
import { OnewaybindingComponent } from './onewaybinding/onewaybinding.component';
import { FormsModule } from '@angular/forms';
import { EventoComponent } from './evento/evento.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { ServicioHolaMundoComponent } from './servicio-hola-mundo/servicio-hola-mundo.component';
import { DirectivasComponent } from './directivas/directivas.component';
import { PasarIdComponent } from './pasar-id/pasar-id.component';
import { RecibirIdComponent } from './recibir-id/recibir-id.component';
import { PasarParametrosComponent } from './pasar-parametros/pasar-parametros.component';
import { RecibirParametrosComponent } from './recibir-parametros/recibir-parametros.component';
import { Padre1Component } from './padre1/padre1.component';
import { Hijo1Component } from './hijo1/hijo1.component';
import { Padre2Component } from './padre2/padre2.component';
import { Hijo2Component } from './hijo2/hijo2.component';

@NgModule({
  declarations: [
    AppComponent,
    InterpolacionComponent,
    OnewaybindingComponent,
    EventoComponent,
    TwowaybindingComponent,
    ServicioHolaMundoComponent,
    DirectivasComponent,
    PasarIdComponent,
    RecibirIdComponent,
    PasarParametrosComponent,
    RecibirParametrosComponent,
    Padre1Component,
    Hijo1Component,
    Padre2Component,
    Hijo2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
