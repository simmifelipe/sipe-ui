import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioCadastroComponent } from './usuario-cadastro/usuario-cadastro.component';
import { UsuarioRoutingModule } from './usuario-routing-module';

@NgModule({
  imports: [
    CommonModule,

    UsuarioRoutingModule
  ],
  declarations: [UsuarioCadastroComponent]
})
export class UsuarioModule { }
