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
import { FormatDocService } from '../shared/format-doc.service';


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
    ModuloModule
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
    ErrorHandlerService,
    AuthenticationService,
    FormatDocService,
    SipeHttp,

    JwtHelperService,
    Title,
    { provide: LOCALE_ID, useValue: 'pt' }
  ]
})
export class CoreModule { }
