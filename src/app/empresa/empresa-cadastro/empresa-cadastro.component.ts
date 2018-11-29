import { AuthenticationService } from './../../seguranca/authentication.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastaService } from 'ngx-toasta';
import { ErrorHandlerService } from './../../core/error-handler.service';
import { FormatDocService } from './../../shared/format-doc.service';
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
    private errorHandler: ErrorHandlerService,
    private formatDocService: FormatDocService,
    private route: ActivatedRoute,
    private router: Router,
    private auth: AuthenticationService) { }

  ngOnInit() {
    this.title.setTitle('Sipe - Empresa');

    const codigoEmpresa = this.route.snapshot.params['codigo'];
    if (codigoEmpresa) {
      this.carregarEmpresa(codigoEmpresa);
    }
  }

  salvar(form: FormControl) {
    this.empresa.utilizador.codigo = this.auth.jwtPayload.utilizador;
    this.empresaService.adicionar(this.empresa)
      .then(empresaAdicionada => {

        this.toastaService.success('Empresa salva com sucesso!');
        this.router.navigate(['/empresas', empresaAdicionada.codigo]);
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  carregarEmpresa(codigo: number) {
    this.empresaService.buscarPorCodigo(codigo)
      .then(emp => this.empresa = emp)
      .catch(erro => this.errorHandler.handle(erro));
  }

  novo(form: FormControl) {

    form.reset();
    setTimeout(function () {
      this.empresa = new Empresa();
    }.bind(this), 1);

    this.router.navigate(['/empresas/novo']);
  }

}
