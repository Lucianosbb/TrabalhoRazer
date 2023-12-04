import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarClienteComponent } from './cliente/listar-cliente/listar-cliente.component';
import { InserirClienteComponent } from './cliente/inserir-cliente/inserir-cliente.component';
import { EditarClienteComponent } from './cliente/editar-cliente/editar-cliente.component';
import { ListarProdutoComponent } from './produto/listar-produto/listar-produto.component';
import { InserirProdutoComponent } from './produto/inserir-produto/inserir-produto.component';
import { EditarProdutoComponent } from './produto/editar-produto/editar-produto.component';
import { ListarPedidoComponent } from './pedido/listar-pedido/listar-pedido.component'; 
import { InserirPedidoComponent } from './pedido/inserir-pedido/inserir-pedido.component';
import { EditarPedidoComponent } from './pedido/editar-pedido/editar-pedido.component';

const routes: Routes = [
{ path: '' , redirectTo: 'clientes/listar',
pathMatch: 'full' },
{ path: 'clientes' , redirectTo: 'clientes/listar',
},
{path: 'clientes/listar' , component: ListarClienteComponent },
{path: 'clientes/novo' , component: InserirClienteComponent },
{path: 'clientes/editar/:id', component: EditarClienteComponent},
{path: 'produtos/listar', component: ListarProdutoComponent},
{path: 'produtos/novo', component: InserirProdutoComponent},
{path: 'produtos/editar/:id', component: EditarProdutoComponent},
{path: 'pedidos/listar', component: ListarPedidoComponent},
{path: 'pedidos/novo', component: InserirPedidoComponent},
{path: 'pedidos/editar/:id', component: EditarPedidoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
