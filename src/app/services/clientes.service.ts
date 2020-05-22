import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cliente } from '../interfaces/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  API_ENDPOINT = 'http://localhost/parqueadero/public/api/';

  constructor(private httpClient: HttpClient) { }

  guardarCliente(cliente: Cliente){

    const HEADERS = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.post(this.API_ENDPOINT + 'guardarCliente', cliente, {headers: HEADERS});
  }
}
