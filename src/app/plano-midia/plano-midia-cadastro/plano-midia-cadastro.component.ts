import { FormControl } from '@angular/forms';
import { ErrorHandlerService } from './../../core/error-handler.service';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastaService } from 'ngx-toasta';
import { PlanoMidiaService } from './../plano-midia.service';
import { PlanoMidia } from './../../shared/model/plano-midia.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plano-midia-cadastro',
  templateUrl: './plano-midia-cadastro.component.html',
  styleUrls: ['./plano-midia-cadastro.component.css']
})
export class PlanoMidiaCadastroComponent implements OnInit {

  planoMidia: PlanoMidia = new PlanoMidia();
  colunas: { field: string; header: string; }[];

  constructor(
    private planoMidiaService: PlanoMidiaService,
    private toastaService: ToastaService,
    private route: ActivatedRoute,
    private router: Router,
    private title: Title,
    private errorHandler: ErrorHandlerService) {

  }

  ngOnInit() {

    this.colunas = [
      { field: 'codigo', header: 'Código' },
      { field: 'descricao', header: 'Descrição do plano de mídia' },
    ];


    this.title.setTitle('Sipe - Planos de Mídia');

    const codigoPlanoMidia = this.route.snapshot.params['codigo'];
    if (codigoPlanoMidia) {
      this.carregarPlanoMidia(codigoPlanoMidia);
    }
  }

  carregarPlanoMidia(codigo: number) {
    this.planoMidiaService.buscarPorCodigo(codigo)
      .then(plan => this.planoMidia = plan)
      .catch(erro => this.errorHandler.handle(erro));
  }

  salvar(form: FormControl) {
    this.planoMidiaService.adicionar(this.planoMidia)
      .then(planoMidiaAdicionado => {

        this.toastaService.success('Plano de mídia gravado com sucesso!');
        this.router.navigate(['/plano-midia', planoMidiaAdicionado.codigo]);
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  novo(form: FormControl) {

    form.reset();
    setTimeout(function () {
      this.PlanoMidia = new PlanoMidia();
    }.bind(this), 1);

    this.router.navigate(['/plano-midia/novo']);
  }


}
