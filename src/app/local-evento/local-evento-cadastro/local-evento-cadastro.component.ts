import { CidadeService } from './../../cidade/cidade.service';
import { FormControl } from '@angular/forms';
import { ErrorHandlerService } from './../../core/error-handler.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalEventoService } from './../local-evento.service';
import { LocalEvento } from './../../shared/model/local-evento.model';
import { Component, OnInit } from '@angular/core';
import { ToastaService } from 'ngx-toasta';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-local-evento-cadastro',
  templateUrl: './local-evento-cadastro.component.html',
  styleUrls: ['./local-evento-cadastro.component.css']
})
export class LocalEventoCadastroComponent implements OnInit {

  localEvento: LocalEvento = new LocalEvento();
  cidadesFiltradas: any[];

  constructor(
    private localEventoService: LocalEventoService,
    private cidadeService: CidadeService,
    private toastaService: ToastaService,
    private route: ActivatedRoute,
    private router: Router,
    private title: Title,
    private errorHandler: ErrorHandlerService) {

  }

  ngOnInit() {

    this.title.setTitle('Sipe - Local do Evento');

    const codigoLocalEvento = this.route.snapshot.params['codigo'];
    if (codigoLocalEvento) {
      this.carregarLocalEvento(codigoLocalEvento);
    }
  }

  carregarLocalEvento(codigo: number) {
    this.localEventoService.buscarPorCodigo(codigo)
      .then(loc => this.localEvento = loc)
      .catch(erro => this.errorHandler.handle(erro));
  }

  salvar(form: FormControl) {
    this.localEventoService.adicionar(this.localEvento)
      .then(localEventoAdicionado => {

        this.toastaService.success('Local para evento gravado com sucesso!');
        this.router.navigate(['/local-evento', localEventoAdicionado.codigo]);
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  novo(form: FormControl) {

    form.reset();
    setTimeout(function () {
      this.localEvento = new LocalEvento();
    }.bind(this), 1);

    this.router.navigate(['/local-evento/novo']);
  }

  buscarCidades(event) {
    const texto = event.query;
    this.cidadeService.pesquisarPorNome(texto)
      .then(cidades => {
        this.cidadesFiltradas = cidades;
      })
      .catch(erro => this.errorHandler.handle(erro));
  }


}
