import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PedidoService } from './services/pedido.service';
import { ListarPedidoComponent } from './listar-pedido/listar-pedido.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { InserirPedidoComponent } from './inserir-pedido/inserir-pedido.component';
import { EditarPedidoComponent } from './editar-pedido/editar-pedido.component';



@NgModule({
  declarations: [
    ListarPedidoComponent,
    InserirPedidoComponent,
    EditarPedidoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers: [
    PedidoService
  ]
})
export class PedidoModule { }
