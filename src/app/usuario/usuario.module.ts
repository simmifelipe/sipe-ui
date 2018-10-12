import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { CheckboxModule } from 'primeng/checkbox';
import { TableModule } from 'primeng/table';

import { SharedModule } from '../shared/shared.module';
import { UsuarioCadastroComponent } from './usuario-cadastro/usuario-cadastro.component';
import { UsuarioRoutingModule } from './usuario-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    CheckboxModule,
    ButtonModule,
    TableModule,
    DropdownModule,

    UsuarioRoutingModule,
    SharedModule
  ],
  declarations: [
    UsuarioCadastroComponent
  ]
})
export class UsuarioModule { }
