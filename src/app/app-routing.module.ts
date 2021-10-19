import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CWelcomeComponent } from './components/c-welcome/c-welcome.component';
import { CrearEmpresaComponent } from './components/crear-empresa/crear-empresa.component';

const routes: Routes = [
  {path: 'crear-empresa',component:CrearEmpresaComponent},
  {path:'c-welcome',component:CWelcomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
