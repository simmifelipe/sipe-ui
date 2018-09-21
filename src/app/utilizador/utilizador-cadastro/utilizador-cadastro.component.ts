import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastaService } from 'ngx-toasta';
import { CidadeService } from '../../cidade/cidade.service';
import { Utilizador } from '../../shared/model/utilizador.model';
import { UtilizadorService } from '../utilizador.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-utilizador-cadastro',
  templateUrl: './utilizador-cadastro.component.html',
  styleUrls: ['./utilizador-cadastro.component.css']
})
export class UtilizadorCadastroComponent implements OnInit {

  utilizador: Utilizador = new Utilizador();
  cidadesFiltradas: any[];

  constructor(
    private utilizadorService: UtilizadorService,
    private cidadeService: CidadeService,
    private toastaService: ToastaService,
    private route: ActivatedRoute,
    private router: Router,
    private title: Title) { }

  ngOnInit() {

    this.title.setTitle('Sipe - Utilizador')

    const codigoUtilizador = this.route.snapshot.params['codigo'];
    if (codigoUtilizador) {
      this.carregarUtilizador(codigoUtilizador)
    }
  }

  carregarUtilizador(codigo: number) {
    this.utilizadorService.buscarPorCodigo(codigo)
      .then(utilizador => {
        this.utilizador = utilizador;
      })
      .catch(erro => console.log(erro))
  }

  salvar(form: FormControl) {
    this.utilizadorService.adicionar(this.utilizador)
      .then(utilizadorAdicionado => {

        this.toastaService.success('Utilizador salvo com sucesso!')
        this.router.navigate(['/utilizadores', utilizadorAdicionado.codigo]);
      })
      .catch(erro => console.log(erro));
  }

  buscarCidades(event) {
    let query = event.query;
    this.cidadeService.pesquisarPorNome(query)
      .then(cidades => this.cidadesFiltradas = cidades);
  }

  novo(form: FormControl) {

    form.reset();
    setTimeout(function () {
      this.utilizador = new Utilizador();
    }.bind(this), 1);
    
    this.router.navigate(['/utilizadores/novo']);
  }




}
