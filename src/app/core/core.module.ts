import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CidadeService } from './../cidade/cidade.service';
import { EmpresaService } from './../empresa/empresa.service';
import { UtilizadorService } from './../utilizador/utilizador.service';
import { MenubarComponent } from './menubar/menubar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    NavbarComponent,
    MenubarComponent,
    PaginaNaoEncontradaComponent
  ],
  exports: [
    NavbarComponent,
    MenubarComponent
  ],
  providers: [
    Title,
    UtilizadorService,
    CidadeService,
    EmpresaService
  ]
})
export class CoreModule { }
