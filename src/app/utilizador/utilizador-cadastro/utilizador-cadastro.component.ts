import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Utilizador } from '../../shared/model/utilizador.model';
import { UtilizadorService } from '../utilizador.service';
@Component({
  selector: 'app-utilizador-cadastro',
  templateUrl: './utilizador-cadastro.component.html',
  styleUrls: ['./utilizador-cadastro.component.css']
})
export class UtilizadorCadastroComponent implements OnInit {

  utilizador: Utilizador = new Utilizador();

  constructor(private utilizadorService: UtilizadorService) { }

  ngOnInit() {
  }

  salvar(form: FormControl) {
    this.utilizadorService.adicionar(this.utilizador)
      .then(() => {
        alert('Salvo com sucesso!')

        form.reset();
        this.utilizador = new Utilizador();
      })
      .catch(erro => console.log(erro));
  }

}
