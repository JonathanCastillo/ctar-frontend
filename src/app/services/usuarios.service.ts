import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private usuarios: any[] = [
    { 
    id: '1',
    nombre: 'Marelyn Arias',
    tipo: 'Administrador',
    email: 'MArias@gmail.com',
    estado: 'Activo',

    },
    { 
    id: '2',  
    nombre: 'Jonathan Castillo',
    tipo: 'Administrador',
    email: 'JonathanC@gmail.com',
    estado: 'Activo',

    },
    { 
    id: '3',  
    nombre: 'Esperanza Guevara',
    tipo: 'Vendedor',
    email: 'EGuevara@gmail.com',
    estado: 'Activo',

    }
    
      ];
      getUsuarios() {
        return this.usuarios;
        }
}

