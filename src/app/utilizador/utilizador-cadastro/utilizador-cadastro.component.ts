import { FormatDocService } from './../../shared/format-doc.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastaService } from 'ngx-toasta';
import { CidadeService } from '../../cidade/cidade.service';
import { Utilizador } from '../../shared/model/utilizador.model';
import { UtilizadorService } from '../utilizador.service';
import { ErrorHandlerService } from './../../core/error-handler.service';

@Component({
  selector: 'app-utilizador-cadastro',
  templateUrl: './utilizador-cadastro.component.html',
  styleUrls: ['./utilizador-cadastro.component.css']
})
export class UtilizadorCadastroComponent implements OnInit {

  utilizador: Utilizador = new Utilizador();
  cidadesFiltradas: any[];
  cidadeSelecionada: any;


  constructor(
    private utilizadorService: UtilizadorService,
    private cidadeService: CidadeService,
    private toastaService: ToastaService,
    private route: ActivatedRoute,
    private router: Router,
    private title: Title,
    private errorHandler: ErrorHandlerService,
    private formatDocService: FormatDocService) { }

  ngOnInit() {

    this.title.setTitle('Sipe - Utilizador');

    const codigoUtilizador = this.route.snapshot.params['codigo'];
    if (codigoUtilizador) {
      this.carregarUtilizador(codigoUtilizador);
    }
  }

  carregarUtilizador(codigo: number) {
    this.utilizadorService.buscarPorCodigo(codigo)
      .then(utl => this.utilizador = utl)
      .catch(erro => this.errorHandler.handle(erro));
  }

  salvar() {
    this.removeMascara();
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

  formataDocumento(valor: any) {
    return this.formatDocService.format(valor);
  }

  removeMascara(){
    if (this.utilizador) {
      if (this.utilizador.cpfCnpj) {
        this.utilizador.cpfCnpj = this.formatDocService.unFormat(this.utilizador.cpfCnpj);
      }
    }
  }


}
