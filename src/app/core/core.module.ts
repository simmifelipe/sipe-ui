import { CommonModule, registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LOCALE_ID, NgModule } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import localePt from '@angular/common/locales/pt';

import { JwtHelperService } from '@auth0/angular-jwt';
import { ToastaModule } from 'ngx-toasta';


import { CidadeService } from './../cidade/cidade.service';
import { EmpresaService } from './../empresa/empresa.service';
import { AuthenticationService } from './../seguranca/authentication.service';
import { UtilizadorService } from './../utilizador/utilizador.service';
import { ErrorHandlerService } from './error-handler.service';
import { MenubarComponent } from './menubar/menubar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { NaoAutorizadoComponent } from './nao-autorizado/nao-autorizado.component';
import { UsuarioModule } from '../usuario/usuario.module';
import { UsuarioService } from '../usuario/usuario.service';
import { ModuloModule } from './../modulo/modulo.module';
import { ModuloService } from './../modulo/modulo.service';
import { EmpresaModule } from './../empresa/empresa.module';
import { UtilizadorModule } from './../utilizador/utilizador.module';
import { SipeHttp } from '../seguranca/sipe-http';
import { PermissaoService } from '../permissao/permissao.service';
import { PermissaoModule } from '../permissao/permissao.module';


registerLocaleData(localePt);

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,

    ToastaModule.forRoot(),

    UtilizadorModule,
    EmpresaModule,
    UsuarioModule,
    ModuloModule,
    PermissaoModule
  ],
  declarations: [
    NavbarComponent,
    MenubarComponent,
    PaginaNaoEncontradaComponent,
    NaoAutorizadoComponent
  ],
  exports: [
    NavbarComponent,
    MenubarComponent,
    ToastaModule
  ],
  providers: [
    UsuarioService,
    UtilizadorService,
    CidadeService,
    EmpresaService,
    ModuloService,
    PermissaoService,
    ErrorHandlerService,
    AuthenticationService,
    SipeHttp,

    JwtHelperService,
    Title,
    { provide: LOCALE_ID, useValue: 'pt' }
    // { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    // { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ]
})
export class CoreModule { }
