import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastaService } from 'ngx-toasta';
import { SelectItem } from 'primeng/components/common/selectitem';
import { ErrorHandlerService } from '../../core/error-handler.service';
import { UsuarioService } from '../usuario.service';
import { EmpresaService } from './../../empresa/empresa.service';
import { AuthenticationService } from './../../seguranca/authentication.service';
import { Empresa } from './../../shared/model/empresa.model';
import { Usuario } from './../../shared/model/usuario.model';



@Component({
  selector: 'app-usuario-cadastro',
  templateUrl: './usuario-cadastro.component.html',
  styleUrls: ['./usuario-cadastro.component.css']
})
export class UsuarioCadastroComponent implements OnInit {

  colunas: any[];
  niveis: SelectItem[];
  empresas: Empresa[] = [];
  usuario: Usuario = new Usuario();

  constructor(
    private usuarioService: UsuarioService,
    private toastaService: ToastaService,
    private route: ActivatedRoute,
    private router: Router,
    private title: Title,
    private errorHandler: ErrorHandlerService,
    private empresaService: EmpresaService,
    private auth: AuthenticationService) {

    this.niveis = [
      { label: 'Selecione...', value: null },
      { label: 'Administrador', value: 2 },
      { label: 'Avançado', value: 3 },
      { label: 'Intermediário', value: 4 },
      { label: 'Básico', value: 5 },
    ];
  }

  ngOnInit() {

    this.colunas = [
      { field: 'codigo', header: 'Código' },
      { field: 'nome', header: 'Nome' },
      { field: 'cnpj', header: 'CPF/CNPJ' },
      { field: 'nivel', header: 'Níveis de acesso' },
    ];

    this.title.setTitle('Sipe - Usuario');

    const codigoUsuario = this.route.snapshot.params['codigo'];
    if (codigoUsuario) {
      this.carregarUsuario(codigoUsuario);
    }

    this.carregarEmpresas();
  }

  carregarUsuario(codigo: number) {
    this.usuarioService.buscarPorCodigo(codigo)
      .then(usu => this.usuario = usu)
      .catch(erro => this.errorHandler.handle(erro));
  }

  salvar(form: FormControl) {
    this.usuario.utilizador.codigo = this.auth.jwtPayload.utilizador;

    this.usuarioService.adicionar(this.usuario)
      .then(usuarioAdicionado => {

        this.toastaService.success('Usuário salvo com sucesso!');
        this.router.navigate(['/usuarios', usuarioAdicionado.codigo]);
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  novo(form: FormControl) {

    form.reset();
    setTimeout(function () {
      this.usuario = new Usuario();
    }.bind(this), 1);

    this.router.navigate(['/usuarios/novo']);
  }

  carregarEmpresas() {
    this.empresaService.buscarPorUtilizador(this.auth.jwtPayload.utilizador)
      .then(emprs => this.empresas = emprs)
      .catch(erro => this.errorHandler.handle(erro));
  }

}
