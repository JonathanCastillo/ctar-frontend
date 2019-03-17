import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { LoginComponent } from './login/login.component';
import { PagesComponent } from './pages/pages.component';
import { SharedComponent } from './shared/shared.component';
import { VercategoriasComponent } from './vercategorias/vercategorias.component';
import { ListarusuariosComponent } from './listarusuarios/listarusuarios.component';
import { RegistrarcategoriasComponent } from './registrarcategorias/registrarcategorias.component';
import { RegistrarventasComponent } from './registrarventas/registrarventas.component';
import { ListarventasComponent } from './listarventas/listarventas.component';

@NgModule({
  declarations: [
    AppComponent,
    NopagefoundComponent,
    LoginComponent,
    PagesComponent,
    SharedComponent,
    VercategoriasComponent,
    ListarusuariosComponent,
    RegistrarcategoriasComponent,
    RegistrarventasComponent,
    ListarventasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
