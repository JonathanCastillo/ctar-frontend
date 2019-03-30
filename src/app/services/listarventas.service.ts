import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ListarventasService {
  private listarventas: any[] = [
    { 
    id: '1',
    monto: '$100.00',
    fecha: '2019-03-04 16:22:40',
    vendedor: 'Irving Campos',
    descripcion: '3-Pinturas Canvas',

    },
    { 
      id: '1',
    monto: '$230.50',
    fecha: '2019-03-04 16:22:40',
    vendedor: 'Karina Mendoza',
    descripcion: '20 camisas #12',

    },
    { 
      id: '1',
      monto: '$40.00',
      fecha: '2019-03-04 16:22:40',
      vendedor: 'Brenda Guevara',
      descripcion: '4-Barro #10',
    }
    
      ];
      getListarventas() {
        return this.listarventas;
        }
}

