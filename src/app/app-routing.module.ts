import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';
import { ReadVisitasComponent } from './visitas/read-visitas/read-visitas.component';
import { CreateVisitaComponent } from './visitas/create-visita/create-visita.component';
import { AuthenticationComponent } from './layout/authentication/authentication.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent, 
    children: [
      { path: 'read', component: ReadVisitasComponent},
      { path: 'create', component: CreateVisitaComponent}
    ]
  },
  {
    path: '',
    component: AuthenticationComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
