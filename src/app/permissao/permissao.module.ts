import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';

import { PermissaoCadastroComponent } from './permissao-cadastro/permissao-cadastro.component';
import { PermissaoRoutingModule } from './permissao-routing.module';
import { SharedModule } from '../shared/shared.module';
import { TableModule } from 'primeng/table';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    DropdownModule,
    ButtonModule,
    TableModule,

    PermissaoRoutingModule,
    SharedModule
  ],
  declarations: [PermissaoCadastroComponent]
})
export class PermissaoModule { }
