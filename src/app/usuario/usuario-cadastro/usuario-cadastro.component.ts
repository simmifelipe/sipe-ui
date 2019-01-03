import { Modulo } from './../../shared/model/modulo.model';
import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSelectChange, MatTableDataSource } from '@angular/material';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastaService } from 'ngx-toasta';
import { EmpresaModulo } from 'src/app/shared/model/empresa-modulo.model';
import { ErrorHandlerService } from '../../core/error-handler.service';
import { UsuarioService } from '../usuario.service';
import { EmpresaService } from './../../empresa/empresa.service';
import { LiberacaoService } from './../../permissao/liberacao.service';
import { AuthenticationService } from './../../seguranca/authentication.service';
import { Empresa } from './../../shared/model/empresa.model';
import { Liberacao } from './../../shared/model/liberacao.model';
import { LiberacaoPK } from './../../shared/model/liberacaoPK.model';
import { Usuario } from './../../shared/model/usuario.model';
import { UtilizadorService } from './../../utilizador/utilizador.service';



@Component({
  selector: 'app-usuario-cadastro',
  templateUrl: './usuario-cadastro.component.html',
  styleUrls: ['./usuario-cadastro.component.css']
})
export class UsuarioCadastroComponent implements OnInit {

  colunas: any[];
  empresas: Empresa[] = [];
  usuario: Usuario = new Usuario();
  empresasUsuarioSelecionadas: EmpresaUsuario[] = [];

  niveis = [
    { codigo: 1, label: 'Administrador' },
    { codigo: 2, label: 'Avançado' },
    { codigo: 3, label: 'Intermediário' },
    { codigo: 4, label: 'Básico' }
  ]
  displayedColumns = ['select', 'col_empresa_nome', 'col_empresa_cnpj', 'col_modulo', 'col_niveis'];
  dataSource = new MatTableDataSource<EmpresaUsuario>();
  selection = new SelectionModel<EmpresaUsuario>(true, []);


  constructor(
    private usuarioService: UsuarioService,
    private toastaService: ToastaService,
    private route: ActivatedRoute,
    private router: Router,
    private title: Title,
    private errorHandler: ErrorHandlerService,
    private empresaService: EmpresaService,
    private auth: AuthenticationService,
    private utilizadorService: UtilizadorService,
    private liberacaoService: LiberacaoService) { }

  ngOnInit() {

    this.title.setTitle('Sipe - Usuario');

    const codigoUsuario = this.route.snapshot.params['codigo'];
    if (codigoUsuario) {
      this.carregarUsuario(codigoUsuario);
    }
    this.carregarDisponiveis();
  }


  carregarDisponiveis() {

    if (this.auth.jwtPayload.codigo) {
      this.liberacaoService.listarDisponiveis(this.auth.jwtPayload.codigo)
        .subscribe(dados => {
          this.dataSource.data = dados;
        })
    }
  }

  carregarUsuario(codigo: number) {
    this.usuarioService.buscarPorCodigo(codigo)
      .then(usu => this.usuario = usu)
      .catch(erro => this.errorHandler.handle(erro));
  }

  salvar() {
    this.usuario.utilizador.codigo = this.auth.jwtPayload.utilizador;

    let liberacoes = [];
    if (this.selection) {

      this.selection.selected.map(dados => {

        let liberacaoPK = new LiberacaoPK();

        liberacaoPK.usuario = new Usuario();
        liberacaoPK.usuario.codigo = this.auth.jwtPayload.codigo;
        let empresaModulo = new EmpresaModulo();
        empresaModulo.empresa = dados.empresa;
        empresaModulo.modulo = dados.modulo;
        liberacaoPK.empresaModulo = empresaModulo;

        let liberacao = new Liberacao();
        liberacao.liberacaoPK = liberacaoPK;
        liberacao.nivel = dados.nivel;

        liberacoes.push(liberacao);
      })

      this.usuario.liberacoes = liberacoes;
      this.usuarioService.adicionar(this.usuario)
        .subscribe((usuarioSalvo) => {
          this.toastaService.success('Usuário salvo com sucesso!');
          this.router.navigate(['/usuarios', usuarioSalvo.codigo]);
        });
    }
  }

  novo(form: FormControl) {

    form.reset();
    setTimeout(function () {
      this.usuario = new Usuario();
    }.bind(this), 1);

    this.router.navigate(['/usuarios/novo']);
  }


  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  selecionar(event: MatSelectChange, element: EmpresaUsuario) {
    element.nivel = event.value;
  }

  show() {
    console.log(this.selection.selected);
  }

}

export interface EmpresaUsuario {
  codigo: number;
  empresa: Empresa
  modulo: Modulo;
  nivel: number;
}

