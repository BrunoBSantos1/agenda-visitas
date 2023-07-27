import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';
import { ReadVisitasComponent } from './visitas/read-visitas/read-visitas.component';
import { CreateVisitaComponent } from './visitas/create-visita/create-visita.component';
import { AuthenticationComponent } from './layout/authentication/authentication.component';
import { StartComponent } from './components/start/start.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent, 
    children: [
      { path: 'read', component: ReadVisitasComponent},
      { path: 'create', component: CreateVisitaComponent}
    ]
  },
  {
    path: '',
    component: AuthenticationComponent,
    children: [
      { path: '', redirectTo: 'start', pathMatch: 'full'},
      { path: 'start', component: StartComponent},
      { path: 'login', component: LoginComponent}
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
