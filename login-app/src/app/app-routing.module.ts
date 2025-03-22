import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { InicioComponent } from './inicio/inicio.component';


const routes: Routes = [
  { path: '', component: AuthComponent },  // Página de login por defecto
  { path: 'inicio', component: InicioComponent }  // Página de éxito
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
