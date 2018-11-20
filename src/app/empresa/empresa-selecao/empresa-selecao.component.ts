import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Permissao } from 'src/app/shared/model/permissao.model';
import { ErrorHandlerService } from './../../core/error-handler.service';
import { LiberacaoService } from './../../permissao/liberacao.service';
import { PermissaoService } from './../../permissao/permissao.service';
import { AuthenticationService } from './../../seguranca/authentication.service';
import { Empresa } from './../../shared/model/empresa.model';
import { Liberacao } from './../../shared/model/liberacao.model';

@Component({
  selector: 'app-empresa-selecao',
  templateUrl: './empresa-selecao.component.html',
  styleUrls: ['./empresa-selecao.component.css']
})
export class EmpresaSelecaoComponent implements OnInit {

  display = true;
  liberacoes: Liberacao[] = [];
  empresas: Empresa[] = [];
  todasLiberacoes: Liberacao[] = [];
  resultadoLiberacoes: Liberacao[] = [];
  permissoes: any = [];
  colunas: any[] = [];
  empresaSelecionada: Empresa;
  habilitado = false;

  constructor(
    private liberacaoService: LiberacaoService,
    private auth: AuthenticationService,
    private errorHandler: ErrorHandlerService,
    private permissaoService: PermissaoService,
    private cookieService: CookieService,
    private router: Router
  ) { }

  ngOnInit() {

    this.colunas = [
      { field: 'nome', header: 'Selecione uma das empresas abaixo' }
    ];

    this.carregarEmpresas();
  }

  carregarEmpresas() {
    this.liberacaoService.buscarPorUsuario(this.auth.jwtPayload.codigo)
      .then(lbrcs => {
        this.todasLiberacoes = lbrcs;
        lbrcs.forEach(lb => {
          if (this.liberacoes.length === 0) {
            this.liberacoes.push(lb);
            this.empresas.push(lb.liberacaoPK.empresaModulo.empresa);
          }
          for (let index = 0; index < this.liberacoes.length; index++) {
            const liberacao = this.liberacoes[index];
            if (liberacao.liberacaoPK.empresaModulo.empresa.codigo
              === lb.liberacaoPK.empresaModulo.empresa.codigo) {
              break;
            }
            if ((this.liberacoes.length - 1) === index) {
              this.liberacoes.push(lb);
              this.empresas.push(lb.liberacaoPK.empresaModulo.empresa);
            }
          }
        });
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  selecionarEmpresa(empresa: number) {
    this.resultadoLiberacoes = [];
    this.habilitado = this.habilitado ? false : true;
    for (let index = 0; index < this.todasLiberacoes.length; index++) {
      const lb = this.todasLiberacoes[index];
      if (lb.liberacaoPK.empresaModulo.empresa.codigo === empresa) {
        this.resultadoLiberacoes.push(lb);
      }
    }
    this.carregarPermissoes();
  }

  confirmarPermissoes() {
    let permissoesString = btoa(this.montarStringPermissoes(this.permissoes));
    this.cookieService.set('permissoes', permissoesString);

    if (this.cookieService.get('permissoes').length > 5) {
      this.router.navigate(['/']);
    }
  }

  private carregarPermissoes() {
    for (let index = 0; index < this.resultadoLiberacoes.length; index++) {
      const lb = this.resultadoLiberacoes[index];
      this.buscarPermissoes(lb.liberacaoPK.empresaModulo.modulo.codigo, lb.nivel);
    }
  }

  private buscarPermissoes(modulo: number, nivel: number) {
    return this.permissaoService.buscarPorModuloENivel(modulo, nivel)
      .then(prms => {
        for (let index = 0; index < prms.length; index++) {
          this.permissoes.push(prms[index]);
        }
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  private montarStringPermissoes(permissoes: Permissao[]): string {
    let retorno = '';
    for (let index = 0; index < this.permissoes.length; index++) {
      const permissao = this.permissoes[index];
      console.log(permissao.descricao);
      retorno += permissao.descricao + ';';
    }
    return retorno;
  }

}
