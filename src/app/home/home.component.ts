import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../services/clientes.service';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../interfaces/cliente';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  API_ENDPOINT = 'http://localhost/parqueadero/public/api/';
  clientes: Cliente[];

  constructor(private clientesService: ClientesService, private httpClient: HttpClient) {
    httpClient.get(this.API_ENDPOINT + 'clientes').subscribe((data: Cliente[]) => {
      this.clientes = data;
    });
   }

  ngOnInit(): void {
  }

}
