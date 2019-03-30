import { Component, OnInit } from '@angular/core';
import { ListarventasService } from '../services/listarventas.service';
@Component({
  selector: 'app-listarventas',
  templateUrl: './listarventas.component.html',
  styleUrls: ['./listarventas.component.css']
})
export class ListarventasComponent implements OnInit {

    constructor(private ListarventasServices: ListarventasService) { }
  
    
    Listarventas: any[] = [];
  
    ngOnInit() {
      this.Listarventas = this.ListarventasServices.getListarventas();
      console.log(this.Listarventas);
      }
  
  
  }
  
