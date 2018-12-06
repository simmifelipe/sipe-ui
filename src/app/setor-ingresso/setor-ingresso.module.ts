import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';

import { SharedModule } from './../shared/shared.module';
import { SetorIngressoCadastroComponent } from './setor-ingresso-cadastro/setor-ingresso-cadastro.component';
import { SetorIngressoRoutingModule } from './setor-ingresso-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    CheckboxModule,
    ButtonModule,
    TableModule,

    SetorIngressoRoutingModule,
    SharedModule

  ],
  declarations: [SetorIngressoCadastroComponent]
})
export class SetorIngressoModule { }
