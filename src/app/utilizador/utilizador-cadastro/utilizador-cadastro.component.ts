import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ToastaService } from 'ngx-toasta';
import { CidadeService } from '../../cidade/cidade.service';
import { Utilizador } from '../../shared/model/utilizador.model';
import { UtilizadorService } from '../utilizador.service';

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
    private toastaService: ToastaService) { }

  ngOnInit() {


  }

  salvar(form: FormControl) {
    this.utilizadorService.adicionar(this.utilizador)
      .then(() => {

        this.toastaService.success('Utilizador salvo com sucesso!')

        form.reset();
        this.utilizador = new Utilizador();
      })
      .catch(erro => console.log(erro));
  }

  buscarCidades(event) {
    let query = event.query;
    this.cidadeService.pesquisarPorNome(query)
      .then(cidades => this.cidadesFiltradas = cidades);
  }




}
