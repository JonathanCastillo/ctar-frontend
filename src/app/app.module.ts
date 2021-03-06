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
import { HomeComponent } from './home/home.component';
import { APP_ROUTES } from './app.routes';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { RegistrarusuarioComponent } from './registrarusuario/registrarusuario.component';
import { AgregarproductoComponent } from './agregarproducto/agregarproducto.component';
import { ArticulosService } from './services/articulos.service';
import { CategoriasService } from './services/categorias.service';
import { UsuariosService } from './services/usuarios.service';
import { ListarventasService } from './services/listarventas.service';

@NgModule({
  declarations: [
    AppComponent,
    NopagefoundComponent,
    LoginComponent,
    HomeComponent,
    PagesComponent,
    SharedComponent,
    VercategoriasComponent,
    ListarusuariosComponent,
    RegistrarcategoriasComponent,
    RegistrarventasComponent,
    ListarventasComponent,
    ProveedoresComponent,
    RegistrarusuarioComponent,
    AgregarproductoComponent
  ],
  imports: [
    BrowserModule, APP_ROUTES,
  ],
  providers: [ArticulosService,CategoriasService,UsuariosService,ListarventasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
