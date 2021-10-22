import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GestionarUsuarioComponent } from './funci_prueba/gestionar-usuario/gestionar-usuario.component';
import { RegisrarUsuarioComponent } from './funci_prueba/regisrar-usuario/regisrar-usuario.component';
import { RegistrarUsuarioComponent } from './funci_prueba/registrar-usuario/registrar-usuario.component';
import { FormGroup, FormControl } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { PaginaPrincipalComponent } from './funci_prueba/pagina-principal/pagina-principal.component';
import { NavbarComponent } from './funci_prueba/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    GestionarUsuarioComponent,
    RegistrarUsuarioComponent,
    RegistrarUsuarioComponent,
    RegisrarUsuarioComponent,
    PaginaPrincipalComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
   


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
