import { FormControl } from '@angular/forms';
import { AuthenticationService } from './../../seguranca/authentication.service';
import { ErrorHandlerService } from './../../core/error-handler.service';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastaService } from 'ngx-toasta';
import { TipoIngressoService } from './../tipo-ingresso.service';
import { TipoIngresso } from './../../shared/model/tipo-ingresso.model';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tipo-ingresso-cadastro',
  templateUrl: './tipo-ingresso-cadastro.component.html',
  styleUrls: ['./tipo-ingresso-cadastro.component.css']
})
export class TipoIngressoCadastroComponent implements OnInit {

  colunas: any[];
  tipoIngresso$: Observable<TipoIngresso[]>;

  tipoIngresso: TipoIngresso = new TipoIngresso();

  constructor(
    private tipoIngressoService: TipoIngressoService,
    private toastaService: ToastaService,
    private route: ActivatedRoute,
    private router: Router,
    private title: Title,
    private errorHandler: ErrorHandlerService,
    private auth: AuthenticationService) {

  }

  ngOnInit() {

    this.colunas = [
      { field: 'codigo', header: 'Código' },
      { field: 'descricao', header: 'Descrição do ingresso' },
    ];


    this.title.setTitle('Sipe - Tipos de ingresso');

    const codigoTipoIngresso = this.route.snapshot.params['codigo'];
    if (codigoTipoIngresso) {
      this.carregarTipoIngresso(codigoTipoIngresso);
    }

    this.listar();
  }

  carregarTipoIngresso(codigo: number) {
    this.tipoIngressoService.buscarPorCodigo(codigo)
      .then(tp => this.tipoIngresso = tp)
      .catch(erro => this.errorHandler.handle(erro));
  }

  salvar(form: FormControl) {
    this.tipoIngresso.utilizador.codigo = this.auth.jwtPayload.utilizador;
    this.tipoIngressoService.adicionar(this.tipoIngresso)
      .then(tipoIngressoAdicionado => {

        this.toastaService.success('Tipo de ingresso cadastrado com sucesso!');
        this.router.navigate(['/tipos-ingresso']);
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  listar() {
    this.tipoIngresso$ = this.tipoIngressoService.listar(this.auth.jwtPayload.utilizador);
  }

  novo(form: FormControl) {

    form.reset();
    setTimeout(function () {
      this.TipoIngresso = new TipoIngresso();
    }.bind(this), 1);

    this.router.navigate(['/tipos-ingresso/novo']);
  }


}
