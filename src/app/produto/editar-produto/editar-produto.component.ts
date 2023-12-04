import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router} from '@angular/router';
import { Produto } from 'src/app/shared/models/produto.model';
import { ProdutoService } from '../services/produto.service';
@Component({
  selector: 'app-editar-produto',
  templateUrl: './editar-produto.component.html',
  styleUrls: ['./editar-produto.component.css']
})
export class EditarProdutoComponent implements OnInit {
  @ViewChild("formProduto") formProduto!: NgForm;
  produto!:Produto;
  constructor(
    private produtoService: ProdutoService,
    private route: ActivatedRoute,
    private router: Router
  ){}
  ngOnInit(): void {
    let id = +this.route.snapshot.params['id'];
    const res = this.produtoService.buscarPorId(id);
    if (res !== undefined)
      this.produto = res;
    else
      throw new Error ("produto não encontrado")
  }
  atualizar(): void {
    if(this.formProduto.form.valid){
      this.produtoService.atualizar(this.produto);
      this.router.navigate(['/produtos/listar']);
    }
  }
}
