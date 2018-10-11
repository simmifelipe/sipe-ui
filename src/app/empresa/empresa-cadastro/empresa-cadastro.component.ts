import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ToastaService } from 'ngx-toasta';
import { ErrorHandlerService } from './../../core/error-handler.service';
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
    private toastaService: ToastaService,
    private title: Title,
    private errorHandler: ErrorHandlerService) { }

  ngOnInit() {
    this.title.setTitle('Sipe - Empresa');
  }

  salvar(form: FormControl) {

    this.empresa.utilizador.codigo = 2; // TODO: Alterar para utilizador logado.

    this.empresaService.adicionar(this.empresa)
      .then(() => {

        this.toastaService.success('Empresa salva com sucesso!');

        form.reset();
        this.empresa = new Empresa();
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

}
