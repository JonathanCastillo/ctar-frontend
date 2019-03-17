import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { LoginComponent } from './login/login.component';
import { PagesComponent } from './pages/pages.component';
import { SharedComponent } from './shared/shared.component';
<<<<<<< HEAD
import { VercategoriasComponent } from './vercategorias/vercategorias.component';
import { ListarusuariosComponent } from './listarusuarios/listarusuarios.component';
import { RegistrarcategoriasComponent } from './registrarcategorias/registrarcategorias.component';
import { RegistrarventasComponent } from './registrarventas/registrarventas.component';
import { ListarventasComponent } from './listarventas/listarventas.component';
=======
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
>>>>>>> 2a4953c301ef6928b048115378edbce55dda4c78

@NgModule({
  declarations: [
    AppComponent,
    NopagefoundComponent,
    LoginComponent,
    PagesComponent,
    SharedComponent,
<<<<<<< HEAD
    VercategoriasComponent,
    ListarusuariosComponent,
    RegistrarcategoriasComponent,
    RegistrarventasComponent,
    ListarventasComponent
=======
    HeaderComponent,
    FooterComponent,
    HomeComponent
>>>>>>> 2a4953c301ef6928b048115378edbce55dda4c78
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
