import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';

import { SharedModule } from './../shared/shared.module';
import { TipoIngressoRoutingModule } from './tipo-ingresso-routing.module';
import { TipoIngressoCadastroComponent } from './tipo-ingresso-cadastro/tipo-ingresso-cadastro.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    CheckboxModule,
    ButtonModule,
    TableModule,

    TipoIngressoRoutingModule,
    SharedModule

  ],
  declarations: [TipoIngressoCadastroComponent]
})
export class TipoIngressoModule { }
