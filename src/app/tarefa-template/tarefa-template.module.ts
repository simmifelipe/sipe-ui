import { AutoCompleteModule } from 'primeng/autocomplete';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';

import { TarefaTemplateCadastroComponent } from './tarefa-template-cadastro/tarefa-template-cadastro.component';
import { TarefaTemplateRoutingModule } from './tarefa-template-routing.module';
import { SharedModule } from './../shared/shared.module';
import { TableModule } from 'primeng/table';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    TableModule,
    DropdownModule,
    MultiSelectModule,
    AutoCompleteModule,

    TarefaTemplateRoutingModule,
    SharedModule
  ],
  declarations: [TarefaTemplateCadastroComponent]
})

export class TarefaTemplateModule { }
