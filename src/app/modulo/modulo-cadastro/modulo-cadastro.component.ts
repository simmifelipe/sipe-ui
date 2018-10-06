import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

import { ToastaService } from 'ngx-toasta';
import { ErrorHandlerService } from './../../core/error-handler.service';
import { ModuloService } from './../modulo.service';
import { Modulo } from './../../shared/model/modulo.model';

@Component({
  selector: 'app-modulo-cadastro',
  templateUrl: './modulo-cadastro.component.html',
  styleUrls: ['./modulo-cadastro.component.css']
})
export class ModuloCadastroComponent implements OnInit {

  colunas: any[];
  modulos = [
    { codigo: 1, descricao: 'Módulo de Eventos' },
    { codigo: 2, descricao: 'Módulo Financeiro' },
  ];

  modulo: Modulo = new Modulo();

  constructor(
    private moduloService: ModuloService,
    private toastaService: ToastaService,
    private route: ActivatedRoute,
    private router: Router,
    private title: Title,
    private errorHandler: ErrorHandlerService) {

  }

  ngOnInit() {

    this.colunas = [
      { field: 'codigo', header: 'Código' },
      { field: 'descricao', header: 'Descrição do módulo' },
    ];


    this.title.setTitle('Sipe - Módulos');

    const codigoModulo = this.route.snapshot.params['codigo'];
    if (codigoModulo) {
      this.carregarModulo(codigoModulo);
    }
  }

  carregarModulo(codigo: number) {
    this.moduloService.buscarPorCodigo(codigo)
      .then(mod => this.modulo = mod)
      .catch(erro => this.errorHandler.handle(erro));
  }

  salvar(form: FormControl) {
    this.moduloService.adicionar(this.modulo)
      .then(moduloAdicionado => {

        this.toastaService.success('Módulo gravado com sucesso!');
        this.router.navigate(['/modulos', moduloAdicionado.codigo]);
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  novo(form: FormControl) {

    form.reset();
    setTimeout(function () {
      this.modulo = new Modulo();
    }.bind(this), 1);

    this.router.navigate(['/modulos/novo']);
  }


}
