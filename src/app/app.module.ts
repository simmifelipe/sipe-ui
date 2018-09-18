import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenubarComponent } from './menubar/menubar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UtilizadorCadastroComponent } from './utilizador/utilizador-cadastro/utilizador-cadastro.component';

import { AutoCompleteModule } from 'primeng/autocomplete';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CheckboxModule } from 'primeng/checkbox';
import {ButtonModule} from 'primeng/button';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MenubarComponent,
    UtilizadorCadastroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,

    AutoCompleteModule,
    InputTextareaModule,
    CheckboxModule,
    ButtonModule



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
