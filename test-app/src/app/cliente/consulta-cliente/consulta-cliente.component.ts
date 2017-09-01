/// <reference path="../../model/cliente.ts" />

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consulta-cliente',
  templateUrl: './consulta-cliente.component.html'
})

export class ConsultaClienteComponent implements OnInit {

  cliente: Cliente = new Cliente('Ayslan Marques');

  constructor() { }

  ngOnInit() {

  }

  getClienteNome() {
    return this.cliente.nome;
  }

}
