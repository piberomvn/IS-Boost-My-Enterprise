import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CWelcomeComponent } from './components/c-welcome/c-welcome.component';
import { CrearEmpresaComponent } from './components/crear-empresa/crear-empresa.component';
import { MaterialTestComponent } from './components/test/material-test/material-test.component';

const routes: Routes = [
  {path: 'crear-empresa',component:CrearEmpresaComponent},
  {path:'c-welcome',component:CWelcomeComponent},
  {path:'material-test',component:MaterialTestComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
