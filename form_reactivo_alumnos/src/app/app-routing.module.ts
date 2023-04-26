import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarAlumnosComponent } from './listar-alumnos/listar-alumnos.component';
import { FormularioComponent } from './formulario/formulario.component';


const routes: Routes = [{path:"", component:ListarAlumnosComponent,children:
[{path:"buscar", component:FormularioComponent},
{path:"modificar", component:FormularioComponent},
{path:"alta", component:FormularioComponent}]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
