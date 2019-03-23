import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ListarusuariosComponent } from './listarusuarios/listarusuarios.component';
import { ListarventasComponent } from './listarventas/listarventas.component';
import { RegistrarcategoriasComponent } from './registrarcategorias/registrarcategorias.component';
import { RegistrarventasComponent } from './registrarventas/registrarventas.component';
import { VercategoriasComponent } from './vercategorias/vercategorias.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';
const appRoutes: Routes = [
    { path : 'login', component : LoginComponent },
    { path : 'users', component : ListarusuariosComponent },
    { path : 'sales', component : ListarventasComponent },
    { path : 'addcat', component : RegistrarcategoriasComponent },
    { path : 'addsale', component : RegistrarventasComponent },
    { path : 'viewcat', component : VercategoriasComponent },
    { path : 'providers', component : ProveedoresComponent },
    { path : 'home', component : HomeComponent }
];
export const APP_ROUTES = RouterModule.forRoot(appRoutes)