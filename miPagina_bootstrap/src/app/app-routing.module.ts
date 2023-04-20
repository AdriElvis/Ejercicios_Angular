import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { FormContactoComponent } from './form-contacto/form-contacto.component';
const routes: Routes = [
  {path: "", component: InicioComponent},
  {path: "form_contacto", component: FormContactoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
