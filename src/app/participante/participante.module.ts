import { AutoCompleteModule } from 'primeng/autocomplete';
import { KeyFilterModule } from 'primeng/keyfilter';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { InputTextareaModule } from 'primeng/inputtextarea';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';

import { SharedModule } from './../shared/shared.module';
import { ParticipanteCadastroComponent } from './participante-cadastro/participante-cadastro.component';
import { ParticipanteRoutingModule } from './participante-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    ButtonModule,
    CheckboxModule,
    InputTextareaModule,
    KeyFilterModule,
    AutoCompleteModule,

    ParticipanteRoutingModule,
    SharedModule,
  ],
  declarations: [
    ParticipanteCadastroComponent
  ],
  exports:[]
})
export class ParticipanteModule { }
