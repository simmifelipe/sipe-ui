import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ToastaService } from 'ngx-toasta';
import { Empresa } from './../../shared/model/empresa.model';
import { EmpresaService } from './../empresa.service';

@Component({
  selector: 'app-empresa-cadastro',
  templateUrl: './empresa-cadastro.component.html',
  styleUrls: ['./empresa-cadastro.component.css']
})
export class EmpresaCadastroComponent implements OnInit {

  empresa = new Empresa();

  constructor(
    private empresaService: EmpresaService,
    private toastaService: ToastaService
  ) { }

  ngOnInit() {
  }

  salvar(form: FormControl) {

    this.empresa.utilizador.codigo = 1; // TODO: Alterar para utilizador logado.

    this.empresaService.adicionar(this.empresa)
      .then(() => {

        this.toastaService.success('Empresa salva com sucesso!')

        form.reset();
        this.empresa = new Empresa();
      })
      .catch(erro => console.log(erro));
  }

}
