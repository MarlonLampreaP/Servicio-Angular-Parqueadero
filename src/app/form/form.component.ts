import { Component, OnInit } from '@angular/core';
import { Cliente } from '../interfaces/cliente';
import { ClientesService } from '../services/clientes.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  cliente: Cliente = {
    nombre: null,
    idparqueadero: null,
    telefono: null
  };
  constructor(private clientesService: ClientesService) { }

  ngOnInit(): void {
  }

  guardarCliente()
  {
    console.log(this.cliente);
    this.clientesService.guardarCliente(this.cliente).subscribe((data)=> {
      alert('Proyecto Guardado');
      console.log(data);
    }, (error) => {
      alert ("Ha ocurrido un error");
      console.log(error);
      
    });

  }

}
