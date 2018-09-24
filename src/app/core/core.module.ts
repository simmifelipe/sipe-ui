import { ErrorInterceptor } from './../helpers/error.interceptor';
import { JwtInterceptor } from './../helpers/jwt.interceptor';
import { AuthenticationService } from './../seguranca/authentication.service';
import { CommonModule } from '@angular/common';
import { LOCALE_ID, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Title } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { ToastaModule } from 'ngx-toasta';

import { CidadeService } from './../cidade/cidade.service';
import { EmpresaService } from './../empresa/empresa.service';
import { AuthService } from './../seguranca/auth.service';
import { UtilizadorService } from './../utilizador/utilizador.service';
import { ErrorHandlerService } from './error-handler.service';
import { MenubarComponent } from './menubar/menubar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    RouterModule,
    HttpClientModule,

    ToastaModule.forRoot()
  ],
  declarations: [
    NavbarComponent,
    MenubarComponent,
    PaginaNaoEncontradaComponent
  ],
  exports: [
    NavbarComponent,
    MenubarComponent,
    ToastaModule
  ],
  providers: [
    Title,
    UtilizadorService,
    CidadeService,
    EmpresaService,
    ErrorHandlerService,
    // AuthService,
    AuthenticationService,
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ]
})
export class CoreModule { }