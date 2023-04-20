import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoCursosComponent } from './listado-cursos/listado-cursos.component';
import { ModificacionCursosComponent } from './modificacion-cursos/modificacion-cursos.component';


const routes: Routes = [{path:"", component:ListadoCursosComponent},
{path:"modificar/:id", component:ModificacionCursosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
