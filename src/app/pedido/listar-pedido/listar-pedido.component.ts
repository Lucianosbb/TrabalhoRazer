import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../services/pedido.service'; 
import { Pedido } from 'src/app/shared/models/pedido.model';

@Component({
  selector: 'app-listar-pedido',
  templateUrl: './listar-pedido.component.html',
  styleUrls: ['./listar-pedido.component.css']
})
export class ListarPedidoComponent implements OnInit {
  pedidos: Pedido[] = [];
  constructor (private pedidoService : PedidoService) {}
  ngOnInit() : void{
    this.pedidos = this.listarTodos();
  
  }
  listarTodos(): Pedido[] {
    return this.pedidoService.listarTodos();
  }
  remover($event: any, pedido: Pedido): void {
    $event.preventDefault();
    if (confirm(`Deseja realmente remover o pedido ${pedido.data}?`)) {
    this.pedidoService.remover(pedido.id!);
    this.pedidos = this.listarTodos();}
  
  }
}
 