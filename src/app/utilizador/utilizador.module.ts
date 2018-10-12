import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AutoCompleteModule } from 'primeng/autocomplete';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { KeyFilterModule } from 'primeng/keyfilter';


import { SharedModule } from '../shared/shared.module';
import { UtilizadorCadastroComponent } from './utilizador-cadastro/utilizador-cadastro.component';
import { UtilizadorRoutingModule } from './utilizador-routing.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    AutoCompleteModule,
    InputTextareaModule,
    CheckboxModule,
    ButtonModule,
    KeyFilterModule,

    UtilizadorRoutingModule,
    SharedModule
  ],
  declarations: [
    UtilizadorCadastroComponent
  ],
  exports: []
})
export class UtilizadorModule { }
