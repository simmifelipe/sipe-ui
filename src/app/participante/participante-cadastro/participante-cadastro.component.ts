import { CidadeService } from './../../cidade/cidade.service';
import { ParticipanteService } from './../participante.service';
import { AuthenticationService } from './../../seguranca/authentication.service';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ErrorHandlerService } from './../../core/error-handler.service';
import { Title } from '@angular/platform-browser';
import { ToastaService } from 'ngx-toasta';
import { Component, OnInit } from '@angular/core';
import { Participante } from 'src/app/shared/model/participante.model';

@Component({
  selector: 'app-participante-cadastro',
  templateUrl: './participante-cadastro.component.html',
  styleUrls: ['./participante-cadastro.component.css']
})
export class ParticipanteCadastroComponent implements OnInit {

  participante = new Participante();
  cidadesFiltradas: any[];

  constructor(
    private participanteService: ParticipanteService,
    private toastaService: ToastaService,
    private title: Title,
    private errorHandler: ErrorHandlerService,
    private cidadeService: CidadeService,
    private route: ActivatedRoute,
    private router: Router,
    private auth: AuthenticationService) { }

  ngOnInit() {
    this.title.setTitle('Sipe - Empresa');

    const codigoParticipante= this.route.snapshot.params['codigo'];
    if (codigoParticipante) {
      this.carregarParticipante(codigoParticipante);
    }
  }

  salvar(form: FormControl) {

    this.participante.utilizador.codigo = this.auth.jwtPayload.utilizador;
    this.participante.tipoPessoa = 'FISICA';
    
    
    console.log(this.participante);
    this.participanteService.adicionar(this.participante)
      .then(participanteAdicionado => {

        this.toastaService.success('Participante salvo com sucesso!');
        this.router.navigate(['/participantes', participanteAdicionado.codigo]);
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


  carregarParticipante(codigo: number) {
    this.participanteService.buscarPorCodigo(codigo)
      .then(part => this.participante = part)
      .catch(erro => this.errorHandler.handle(erro));
  }

  novo(form: FormControl) {

    form.reset();
    setTimeout(function () {
      this.participante = new Participante();
    }.bind(this), 1);

    this.router.navigate(['/participantes/novo']);
  }

}
