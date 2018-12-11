import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

import { ErrorHandlerService } from './../../core/error-handler.service';
import { ToastaService } from 'ngx-toasta';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from './../../seguranca/authentication.service';

import { SetorIngressoService } from './../setor-ingresso.service';
import { SetorIngresso } from './../../shared/model/setor-ingresso.model';

@Component({
  selector: 'app-setor-ingresso-cadastro',
  templateUrl: './setor-ingresso-cadastro.component.html',
  styleUrls: ['./setor-ingresso-cadastro.component.css']
})
export class SetorIngressoCadastroComponent implements OnInit {


  checked: boolean;
  setorIngresso$: Observable<SetorIngresso[]>;
  setorIngresso: SetorIngresso = new SetorIngresso();

  constructor(
    private setorIngressoService: SetorIngressoService,
    private toastaService: ToastaService,
    private route: ActivatedRoute,
    private router: Router,
    private title: Title,
    private errorHandler: ErrorHandlerService,
    private auth: AuthenticationService) {

    }

    ngOnInit() {

      this.title.setTitle('Sipe - Setor de ingresso');

      const codigoSetorIngresso = this.route.snapshot.params['codigo'];
      if (codigoSetorIngresso) {
        this.carregarSetorIngresso(codigoSetorIngresso);
      }

      this.listar();
    }


    carregarSetorIngresso(codigo: number) {
      this.setorIngressoService.buscarPorCodigo(codigo)
      .then(st => this.setorIngresso = st)
      .catch(erro => this.errorHandler.handle(erro));
    }

  salvar(form: FormControl) {
    this.setorIngresso.utilizador.codigo = this.auth.jwtPayload.utilizador;
    this.setorIngressoService.adicionar(this.setorIngresso)
      .then(setorIngressoAdicionado => {

        this.toastaService.success('Setor cadastrado com sucesso!');
        this.router.navigate(['/setores-ingresso']);
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  listar() {
    this.setorIngresso$ = this.setorIngressoService.listar(this.auth.jwtPayload.utilizador);
  }

  novo(form: FormControl) {

    form.reset();
    setTimeout(function () {
      this.SetorIngresso = new SetorIngresso();
    }.bind(this), 1);

    this.router.navigate(['/setores-ingresso/novo']);
  }


}
