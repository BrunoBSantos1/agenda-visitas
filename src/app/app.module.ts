import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './layout/home/home.component';

//Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { VisitasRoutingModule } from './visitas/visitas-routing.module';
import { VisitasModule } from './visitas/visitas.module';


import { AngularFireModule } from '@angular/fire/compat'
import { environment } from 'src/environments/environment';

const configFirebase = environment.firebaseConfig



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    VisitasRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(configFirebase),
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatCardModule,
    VisitasModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
