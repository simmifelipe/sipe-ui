import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { InputTextareaModule } from 'primeng/inputtextarea';
import { KeyFilterModule } from 'primeng/keyfilter';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';

import { SharedModule } from '../shared/shared.module';
import { EmpresaRoutingModule } from './empresa-routing.module';
import { EmpresaCadastroComponent } from './empresa-cadastro/empresa-cadastro.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    ButtonModule,
    CheckboxModule,
    InputTextareaModule,
    KeyFilterModule,


    SharedModule,
    EmpresaRoutingModule
  ],
  declarations: [
    EmpresaCadastroComponent
  ],
  exports: []
})
export class EmpresaModule { }
