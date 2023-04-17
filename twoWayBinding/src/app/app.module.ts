import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { FormsModule } from '@angular/forms';
import { DivisasComponent } from './divisas/divisas.component';
import { FormularioCompraComponent } from './formulario-compra/formulario-compra.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculadoraComponent,
    DivisasComponent,
    FormularioCompraComponent
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
