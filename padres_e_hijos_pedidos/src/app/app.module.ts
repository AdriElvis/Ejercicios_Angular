import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormPedidosHijoComponent } from './form-pedidos-hijo/form-pedidos-hijo.component';
import { ListaPedidosPadreComponent } from './lista-pedidos-padre/lista-pedidos-padre.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FormPedidosHijoComponent,
    ListaPedidosPadreComponent
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
