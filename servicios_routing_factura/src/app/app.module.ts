import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { ContactarComponent } from './contactar/contactar.component';
import { MostrarFacturasComponent } from './mostrar-facturas/mostrar-facturas.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    QuienesSomosComponent,
    ContactarComponent,
    MostrarFacturasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }