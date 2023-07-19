import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateVisitaComponent } from './create-visita/create-visita.component';

const routes: Routes = [
  { path: "create", component: CreateVisitaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisitasRoutingModule { }
