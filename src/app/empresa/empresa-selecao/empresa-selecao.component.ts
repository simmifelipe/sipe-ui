import { ErrorHandlerService } from './../../core/error-handler.service';
import { AuthenticationService } from './../../seguranca/authentication.service';
import { Liberacao } from './../../shared/model/liberacao.model';
import { LiberacaoService } from './../../permissao/liberacao.service';
import { Component, OnInit } from '@angular/core';
import { Permissao } from 'src/app/shared/model/permissao.model';

@Component({
  selector: 'app-empresa-selecao',
  templateUrl: './empresa-selecao.component.html',
  styleUrls: ['./empresa-selecao.component.css']
})
export class EmpresaSelecaoComponent implements OnInit {

  display = true;
  liberacoes: Liberacao[] = [];
  todasLiberacoes: Liberacao[] = [];
  resultadoLiberacoes: Liberacao[] = [];
  permissoes: Permissao[] = [];

  constructor(
    private liberacaoService: LiberacaoService,
    private auth: AuthenticationService,
    private errorHandler: ErrorHandlerService
  ) { }

  ngOnInit() {
    this.carregarEmpresas();
  }

  carregarEmpresas() {
    this.liberacaoService.buscarPorUsuario(this.auth.jwtPayload.codigo)
      .then(lbrcs => {
        this.todasLiberacoes = lbrcs;
        lbrcs.forEach(lb => {
          if (this.liberacoes.length === 0) {
            this.liberacoes.push(lb);
          }
          for (let index = 0; index < this.liberacoes.length; index++) {
            const liberacao = this.liberacoes[index];
            if (liberacao.liberacaoPK.empresaModulo.empresa.codigo
              === lb.liberacaoPK.empresaModulo.empresa.codigo) {
              break;
            }
            if ((this.liberacoes.length - 1) === index) {
              this.liberacoes.push(lb);
            }
          }
        });
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  selecionarEmpresa(empresa: number) {
    const resultadoLiberacoes = [];
    for (let index = 0; index < this.todasLiberacoes.length; index++) {
      const lb = this.todasLiberacoes[index];
      if (lb.liberacaoPK.empresaModulo.empresa.codigo === empresa) {
        resultadoLiberacoes.push(lb);
      }
    }
  }


  carregarPermissoes() {
    for (let index = 0; index < this.resultadoLiberacoes.length; index++) {
      const lb = this.resultadoLiberacoes[index];



    }
  }


  private buscarPermissoes(modulo: number, nivel: number): Permissao[] {

  }

}
