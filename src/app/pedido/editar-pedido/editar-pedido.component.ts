import { Component, OnInit, ViewChild } from '@angular/core';
import { Pedido } from 'src/app/shared/models/pedido.model';
import { PedidoService } from '../services/pedido.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-editar-pedido',
  templateUrl: './editar-pedido.component.html',
  styleUrls: ['./editar-pedido.component.css']
})
export class EditarPedidoComponent {
  @ViewChild("formPedido") formPedido!: NgForm;
  pedido!: Pedido;
  constructor(
    private pedidoService: PedidoService,
    private route: ActivatedRoute,
    private router: Router
  ){}
  ngOnInit(): void {
    let id = +this.route.snapshot.params['id'];
    const res = this.pedidoService.buscarPorId(id);
    if (res !== undefined)
      this.pedido = res;
    else
      throw new Error ("pedido não encontrado")
  }
  atualizar(): void {
    if(this.formPedido.form.valid){
      this.pedidoService.atualizar(this.pedido);
      this.router.navigate(['/pedidos/listar']);
    }
  }
}
