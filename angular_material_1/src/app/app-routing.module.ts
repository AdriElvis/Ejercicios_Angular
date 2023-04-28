import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { ContenidoComponent } from './contenido/contenido.component';
import { ContactoComponent } from './contacto/contacto.component';


const routes: Routes = [{path:"", component:InicioComponent},
{path:"login", component:LoginComponent},
{path:"contenido", component:ContenidoComponent},
{path:"contacto", component:ContactoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
