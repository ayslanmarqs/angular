import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultaClienteComponent } from './consulta-cliente/consulta-cliente.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    ConsultaClienteComponent
  ],
  exports: [
    ConsultaClienteComponent
  ]
})
export class ClienteModule { }
