import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { UtilizadorModule } from './utilizador/utilizador.module';
import { UtilizadorService } from './utilizador/utilizador.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,

    SharedModule,
    CoreModule,
    UtilizadorModule

  ],
  providers: [UtilizadorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
