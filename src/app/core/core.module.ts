import { SetorIngressoService } from './../setor-ingresso/setor-ingresso.service';
import { SetorIngressoModule } from './../setor-ingresso/setor-ingresso.module';
import { LocalEventoModule } from './../local-evento/local-evento.module';
import { LocalEventoService } from './../local-evento/local-evento.service';
import { PlanoMidiaService } from './../plano-midia/plano-midia.service';
import { PlanoMidiaModule } from './../plano-midia/plano-midia.module';
import { DashboardModule } from './../dashboard/dashboard.module';
import { ParticipanteModule } from './../participante/participante.module';
import { TarefaTemplateModule } from './../tarefa-template/tarefa-template.module';
import { CommonModule, registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LOCALE_ID, NgModule } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import localePt from '@angular/common/locales/pt';

import { JwtHelperService } from '@auth0/angular-jwt';
import { ToastaModule } from 'ngx-toasta';
import { CookieService } from 'ngx-cookie-service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


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
import { FormatDocService } from '../shared/format-doc.service';
import { TarefaTemplateService } from '../tarefa-template/tarefa-template.service';
import { ParticipanteService } from '../participante/participante.service';
import { TipoParticipanteModule } from '../tipo-participante/tipo-participante.module';
import { TipoParticipanteService } from '../tipo-participante/tipo-participante.service';


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
    PermissaoModule,
    PlanoMidiaModule,
    SetorIngressoModule,
    TarefaTemplateModule,
    LocalEventoModule,
    ParticipanteModule,
    DashboardModule,
    TipoParticipanteModule
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
    
    ToastaModule,
    BrowserAnimationsModule
  ],
  providers: [
    ParticipanteService,
    UsuarioService,
    UtilizadorService,
    CidadeService,
    EmpresaService,
    ModuloService,
    PermissaoService,
    PlanoMidiaService,
    SetorIngressoService,
    TarefaTemplateService,
    LocalEventoService,
    TipoParticipanteService,
    ErrorHandlerService,
    AuthenticationService,
    FormatDocService,
    SipeHttp,

    JwtHelperService,
    Title,
    CookieService,
    { provide: LOCALE_ID, useValue: 'pt' }
  ]
})
export class CoreModule { }
