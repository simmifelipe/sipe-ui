import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';

import { ModuloCadastroComponent } from './modulo-cadastro/modulo-cadastro.component';
import { ModuloRoutingModule } from './modulo-routing-module';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    ButtonModule,
    TableModule,

    ModuloRoutingModule,
    SharedModule

  ],
  declarations: [ModuloCadastroComponent]
})
export class ModuloModule { }
