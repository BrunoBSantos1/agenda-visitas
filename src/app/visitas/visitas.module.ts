import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { VisitasRoutingModule } from './visitas-routing.module';
import { CreateVisitaComponent } from './create-visita/create-visita.component';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';

import { ReadVisitasComponent } from './read-visitas/read-visitas.component';


@NgModule({
  declarations: [
    CreateVisitaComponent,
    ReadVisitasComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    VisitasRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatButtonModule,
    MatSelectModule,
    MatCardModule
  ],
  exports: [
    CreateVisitaComponent
  ]
})
export class VisitasModule { }
