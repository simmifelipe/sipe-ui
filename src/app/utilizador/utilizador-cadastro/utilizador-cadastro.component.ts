import { Modulo } from './../../shared/model/modulo.model';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastaService } from 'ngx-toasta';
import { CidadeService } from '../../cidade/cidade.service';
import { Utilizador } from '../../shared/model/utilizador.model';
import { UtilizadorService } from '../utilizador.service';
import { ErrorHandlerService } from './../../core/error-handler.service';
import { FormatDocService } from './../../shared/format-doc.service';
import { ModuloService } from 'src/app/modulo/modulo.service';

@Component({
  selector: 'app-utilizador-cadastro',
  templateUrl: './utilizador-cadastro.component.html',
  styleUrls: ['./utilizador-cadastro.component.css']
})
export class UtilizadorCadastroComponent implements OnInit {

  utilizador: Utilizador = new Utilizador();
  cidadesFiltradas: any[];
  cidadeSelecionada: any;
  modulos: Modulo[] = [];
  colunas: any[] = [];


  constructor(
    private utilizadorService: UtilizadorService,
    private cidadeService: CidadeService,
    private toastaService: ToastaService,
    private route: ActivatedRoute,
    private router: Router,
    private title: Title,
    private errorHandler: ErrorHandlerService,
    private formatDocService: FormatDocService,
    private moduloService: ModuloService) { }

  ngOnInit() {

    this.title.setTitle('Sipe - Utilizador');

    const codigoUtilizador = this.route.snapshot.params['codigo'];
    if (codigoUtilizador) {
      this.carregarUtilizador(codigoUtilizador);
    }

    this.colunas = [
      { field: 'codigo', header: 'Código' },
      { field: 'descricao', header: 'Descrição' }
    ];
    this.carregarModulos();
  }

  carregarUtilizador(codigo: number) {
    this.utilizadorService.buscarPorCodigo(codigo)
      .then(utl => this.utilizador = utl)
      .catch(erro => this.errorHandler.handle(erro));
  }

  salvar() {
    if (this.utilizador && this.utilizador.cpfCnpj) {
      this.utilizador.cpfCnpj = this.formatDocService.unFormat(this.utilizador.cpfCnpj);
    }
    this.utilizadorService.adicionar(this.utilizador)
      .then(utilizadorAdicionado => {

        this.toastaService.success('Utilizador salvo com sucesso!');
        this.router.navigate(['/utilizadores', utilizadorAdicionado.codigo]);
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  buscarCidades(event) {
    const texto = event.query;
    this.cidadeService.pesquisarPorNome(texto)
      .then(cidades => {
        this.cidadesFiltradas = cidades;
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  novo(form: FormControl) {

    form.reset();
    setTimeout(function () {
      this.utilizador = new Utilizador();
    }.bind(this), 1);

    this.router.navigate(['/utilizadores/novo']);
  }

  carregarModulos() {
    this.moduloService.listar()
      .then(mds => this.modulos = mds)
      .catch(erro => this.errorHandler.handle(erro));
  }
}
