import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxModule } from 'primeng/checkbox';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';

import { SharedModule } from './../shared/shared.module';
import { PlanoMidiaRoutingModule } from './plano-midia-routing.module';
import { PlanoMidiaCadastroComponent } from './plano-midia-cadastro/plano-midia-cadastro.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    CheckboxModule,
    ButtonModule,
    TableModule,

    PlanoMidiaRoutingModule,
    SharedModule
  ],
  declarations: [PlanoMidiaCadastroComponent]
})
export class PlanoMidiaModule { }
