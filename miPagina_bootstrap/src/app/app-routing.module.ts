import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { FormContactoComponent } from './form-contacto/form-contacto.component';
import { BlogComponent } from './blog/blog.component';
import { Articulo1Component } from './articulo1/articulo1.component';
import { Articulo2Component } from './articulo2/articulo2.component';


const routes: Routes = [
  {path: "", component: InicioComponent},
  {path: "blog", component: BlogComponent},
  {path: "blog/articulo1", component: Articulo1Component},
  {path: "blog/articulo2", component: Articulo2Component},
  {path: "form_contacto", component: FormContactoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
