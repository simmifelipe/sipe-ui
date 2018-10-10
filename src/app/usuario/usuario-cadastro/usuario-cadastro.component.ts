import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { FormControl } from '@angular/forms';

import { SelectItem } from 'primeng/components/common/selectitem';

import { ErrorHandlerService } from '../../core/error-handler.service';
import { Usuario } from './../../shared/model/usuario.model';
import { UsuarioService } from '../usuario.service';
import { ToastaService } from 'ngx-toasta';

@Component({
  selector: 'app-usuario-cadastro',
  templateUrl: './usuario-cadastro.component.html',
  styleUrls: ['./usuario-cadastro.component.css']
})
export class UsuarioCadastroComponent implements OnInit {

  colunas: any[];
  niveis: SelectItem[];
  empresas = [
    {
      codigo: 1, nome: 'Empresa de teste 1', cpfCnpj: '01.002.003/0001-02',
      modulo: 1, nivel: null, chave: 11
    },
    {
      codigo: 1, nome: 'Empresa de teste 1', cpfCnpj: '01.002.003/0001-02',
      modulo: 2, nivel: null, chave: 12
    },
    {
      codigo: 2, nome: 'Empresa de teste 2', cpfCnpj: '01.002.003/0002-05',
      modulo: 1, nivel: null, chave: 21
    },
    {
      codigo: 2, nome: 'Empresa de teste 2', cpfCnpj: '01.002.003/0002-05',
      modulo: 2, nivel: null, chave: 22
    },
    {
      codigo: 3, nome: 'Empresa de teste 3', cpfCnpj: '01.002.003/0003-07',
      modulo: 1, nivel: null, chave: 31
    },
    {
      codigo: 3, nome: 'Empresa de teste 3', cpfCnpj: '01.002.003/0003-07',
      modulo: 2, nivel: null, chave: 32
    },
  ];


  usuario: Usuario = new Usuario();

  constructor(
    private usuarioService: UsuarioService,
    private toastaService: ToastaService,
    private route: ActivatedRoute,
    private router: Router,
    private title: Title,
    private errorHandler: ErrorHandlerService) {

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
      { field: 'cpfCnpj', header: 'CPF/CNPJ' },
      { field: 'modulo', header: 'Módulo' },
      { field: 'nivel', header: 'Níveis de acesso' },
    ];


    this.title.setTitle('Sipe - Usuario');

    const codigoUsuario = this.route.snapshot.params['codigo'];
    if (codigoUsuario) {
      this.carregarUsuario(codigoUsuario);
    }
  }

  carregarUsuario(codigo: number) {
    this.usuarioService.buscarPorCodigo(codigo)
      .then(usu => this.usuario = usu)
      .catch(erro => this.errorHandler.handle(erro));
  }

  salvar(form: FormControl) {
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


}
