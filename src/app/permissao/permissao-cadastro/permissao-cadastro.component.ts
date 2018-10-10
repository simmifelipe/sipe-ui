import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

import { ToastaService } from 'ngx-toasta';
import { SelectItem } from 'primeng/components/common/selectitem';

import { ErrorHandlerService } from './../../core/error-handler.service';
import { Permissao } from './../../shared/model/permissao.model';
import { PermissaoService } from './../permissao.service';

@Component({
  selector: 'app-permissao-cadastro',
  templateUrl: './permissao-cadastro.component.html',
  styleUrls: ['./permissao-cadastro.component.css']
})
export class PermissaoCadastroComponent implements OnInit {

  colunas: any[];
  niveis: SelectItem[];

  modulos: SelectItem[];

  permissao: Permissao = new Permissao();

  constructor(
    private permissaoService: PermissaoService,
    private toastaService: ToastaService,
    private route: ActivatedRoute,
    private router: Router,
    private title: Title,
    private errorHandler: ErrorHandlerService) {

    this.niveis = [
      { label: 'Selecione...', value: null },
      { label: 'Administrador', value: 2 },
      { label: 'Avançado', value: 3 },
      { label: 'Intermediário', value: 4 },
      { label: 'Básico', value: 5 },
    ];

    this.modulos = [
      { label: 'Selecione...', value: null },
      { label: 'Teste 1', value: 1 },
      { label: 'Teste 2', value: 2 },
    ];
  }


  ngOnInit() {

    this.colunas = [
      { field: 'codigo', header: 'Código' },
      { field: 'descricao', header: 'Descrição' },
      { field: 'modulo', header: 'Módulo' },
      { field: 'nivel', header: 'Níveis para acesso' },
    ];

    this.title.setTitle('Sipe - Permissão');

    const codigoPermissao = this.route.snapshot.params['codigo'];
    if (codigoPermissao) {
      this.carregarPermissao(codigoPermissao);
    }
  }

  carregarPermissao(codigo: number) {
    this.permissaoService.buscarPorCodigo(codigo)
      .then(perm => this.permissao = perm)
      .catch(erro => this.errorHandler.handle(erro));
  }

  salvar(form: FormControl) {
    this.permissaoService.adicionar(this.permissao)
      .then(permissaoAdicionada => {

        this.toastaService.success('Permissão salva com sucesso!');
        this.router.navigate(['/permissoes', permissaoAdicionada.codigo]);
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  novo(form: FormControl) {

    form.reset();
    setTimeout(function () {
      this.permissao = new Permissao();
    }.bind(this), 1);

    this.router.navigate(['/permissoes/novo']);
  }
}
