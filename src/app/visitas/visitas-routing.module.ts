import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateVisitaComponent } from './create-visita/create-visita.component';
import { ReadVisitasComponent } from './read-visitas/read-visitas.component';
import { UpdateVisitaComponent } from './update-visita/update-visita.component';

const routes: Routes = [
  { path: "create", component: CreateVisitaComponent},
  { path: "read", component: ReadVisitasComponent},
  { path: "read/:id", component: UpdateVisitaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisitasRoutingModule { }
