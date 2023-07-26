import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

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
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';


import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { ReadVisitasComponent } from './visitas/read-visitas/read-visitas.component';
import { CreateVisitaComponent } from './visitas/create-visita/create-visita.component';
import { StartComponent } from './components/start/start.component';
import { AuthenticationComponent } from './layout/authentication/authentication.component';

const configFirebase = environment.firebaseConfig



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ReadVisitasComponent,
    CreateVisitaComponent,
    StartComponent,
    AuthenticationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(configFirebase),
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore())
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
