import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaPrincipalComponent } from './funci_prueba/pagina-principal/pagina-principal.component';
import { RegistrarUsuarioComponent } from './funci_prueba/registrar-usuario/registrar-usuario.component';


const routes: Routes = [

{path: '' , component : PaginaPrincipalComponent },
{path: 'registrar_usuario' , component : RegistrarUsuarioComponent },
{path: 'pagina_principal' , component : PaginaPrincipalComponent }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
