import { Injectable } from '@angular/core';
import { Pedido } from 'src/app/shared/models/pedido.model';

const LS_CHAVE: string = "pedidos";

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  constructor() { }
  listarTodos(): Pedido[] {
    const pedidos = localStorage[LS_CHAVE];
    return pedidos ? JSON.parse(pedidos) : [];
  }
  inserir(pedido: Pedido): void {
    const pedidos = this.listarTodos();
    pedido.id = new Date().getTime();
    pedidos.push(pedido);
    localStorage[LS_CHAVE] = JSON.stringify(pedidos);
  }
  buscarPorId(id: number): Pedido | undefined {
    const pedidos: Pedido[] = this.listarTodos();    
  return  pedidos.find(pedido => pedido.id === id);
  }
  atualizar(pedido: Pedido): void {
    const pedidos: Pedido[] = this.listarTodos();
    pedidos.forEach( (obj, index, objs) => {
      if (pedido.id === obj.id) {
        objs[index] = pedido
      }
    });
    localStorage[LS_CHAVE] = JSON.stringify(pedidos);
  }
  remover(id: number): void {
    let pedidos: Pedido[] = this.listarTodos();
    pedidos = pedidos.filter(pedido => pedido.id !== id);
    localStorage[LS_CHAVE] = JSON.stringify(pedidos);
  }
}