import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateVisitaComponent } from './create-visita/create-visita.component';
import { ReadVisitasComponent } from './read-visitas/read-visitas.component';

const routes: Routes = [
  { path: "create", component: CreateVisitaComponent},
  { path: "read", component: ReadVisitasComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisitasRoutingModule { }
