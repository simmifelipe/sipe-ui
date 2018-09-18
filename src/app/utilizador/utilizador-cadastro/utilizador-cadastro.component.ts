import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-utilizador-cadastro',
  templateUrl: './utilizador-cadastro.component.html',
  styleUrls: ['./utilizador-cadastro.component.css']
})
export class UtilizadorCadastroComponent implements OnInit {

  utilizador: Utilizador = new Utilizador();

  constructor() { }

  ngOnInit() {
  }


  salvar(form: FormControl) {
    console.log(form);
  }

}

export class Utilizador {

  nome: string;

}
