import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { UtilizadorCadastroComponent } from './utilizador-cadastro/utilizador-cadastro.component';

import { AutoCompleteModule } from 'primeng/autocomplete';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    AutoCompleteModule,
    InputTextareaModule,
    CheckboxModule,
    ButtonModule,

    SharedModule
  ],
  declarations: [
    UtilizadorCadastroComponent
  ],
  exports: [
    UtilizadorCadastroComponent
  ]
})
export class UtilizadorModule { }
