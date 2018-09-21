import { EmpresaModule } from './empresa/empresa.module';
import { EmpresaService } from './empresa/empresa.service';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { UtilizadorModule } from './utilizador/utilizador.module';
import { UtilizadorService } from './utilizador/utilizador.service';
import { CidadeService } from './cidade/cidade.service';

import { ToastaModule } from 'ngx-toasta';
import { EmpresaCadastroComponent } from './empresa/empresa-cadastro/empresa-cadastro.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,

    ToastaModule.forRoot(),

    SharedModule,
    CoreModule,
    UtilizadorModule,
    EmpresaModule

  ],
  providers: [
    UtilizadorService,
    CidadeService,
    EmpresaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
