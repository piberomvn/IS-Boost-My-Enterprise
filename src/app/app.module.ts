import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Servicios
import { HttpClientModule } from '@angular/common/http';

//
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CWelcomeComponent } from './components/c-welcome/c-welcome.component';

//los imports de material estan en material.module.ts

import { CrearEmpresaComponent } from './components/crear-empresa/crear-empresa.component';
import { MaterialModule } from './material/material.module';
import { HeaderGrupoComponent } from './components/header-grupo/header-grupo.component';
import { MaterialTestComponent } from './components/test/material-test/material-test.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderToolbarComponent } from './components/header-toolbar/header-toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    CWelcomeComponent,
    CrearEmpresaComponent,
    HeaderGrupoComponent,
    MaterialTestComponent,
    FooterComponent,
    HeaderToolbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
