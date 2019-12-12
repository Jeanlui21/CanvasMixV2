import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { MDBBootstrapModule } from 'angular-bootstrap-md';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MenuComponent } from './components/menu/menu.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';

import { environment } from 'src/environments/environment';
import { IngresoComponent } from './components/login/ingreso/ingreso.component';
import { RegistroComponent } from './components/login/registro/registro.component';


import { EventosComponent } from './components/eventos/eventos.component';

import { RecompensasComponent } from './components/recompensas/recompensas.component';
import { OpcionesComponent } from './components/dashboard/opciones/opciones.component';
import { CursoComponent } from './components/curso/curso.component';
import { BarComponent } from './components/curso/bar/bar.component';
import { LogicaService } from './services/logica.service';
import { ExplorerPipe } from './pipes/explorer.pipe';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    MenuComponent,
    IngresoComponent,
    RegistroComponent,
    EventosComponent,
    RecompensasComponent,
    OpcionesComponent,
    CursoComponent,
    BarComponent,
    ExplorerPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
  ],
  entryComponents: [ IngresoComponent, RegistroComponent,OpcionesComponent ],
  providers: [AngularFireAuth, AngularFirestore, LogicaService],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
