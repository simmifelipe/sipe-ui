import { Usuario } from './../../shared/model/usuario.model';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { ToastaService } from 'ngx-toasta';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { ErrorHandlerService } from '../../core/error-handler.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-usuario-cadastro',
  templateUrl: './usuario-cadastro.component.html',
  styleUrls: ['./usuario-cadastro.component.css']
})
export class UsuarioCadastroComponent implements OnInit {

  empresas = [
    { codigo: 1, nome: 'Empresa de teste 1', cpfCnpj: '01.002.003/0004-05',
      nivel: null },
    { codigo: 2, nome: 'Empresa de teste 2', cpfCnpj: '01.002.003/0004-05',
      nivel: null },
    { codigo: 3, nome: 'Empresa de teste 3', cpfCnpj: '01.002.003/0004-05',
      nivel: null },
  ];


  usuario: Usuario = new Usuario();
  // cidadesFiltradas: any[];
  // cidadeSelecionada: any;

  constructor(
    private usuarioService: UsuarioService,
    private toastaService: ToastaService,
    private route: ActivatedRoute,
    private router: Router,
    private title: Title,
    private errorHandler: ErrorHandlerService) { }

  ngOnInit() {

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
