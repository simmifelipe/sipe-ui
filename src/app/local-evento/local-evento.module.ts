import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutoCompleteModule } from 'primeng/autocomplete';
import { SharedModule } from './../shared/shared.module';
import { LocalEventoRoutingModule } from './local-evento-routing.module';
import { LocalEventoCadastroComponent } from './local-evento-cadastro/local-evento-cadastro.component';
import { LocalEventoConsultaComponent } from './local-evento-consulta/local-evento-consulta.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    TableModule,
    AutoCompleteModule,

    LocalEventoRoutingModule,
    SharedModule
  ],
  declarations: [LocalEventoCadastroComponent, LocalEventoConsultaComponent]
})
export class LocalEventoModule { }
