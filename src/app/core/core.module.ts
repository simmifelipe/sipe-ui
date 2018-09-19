import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MenubarComponent } from './menubar/menubar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NavbarComponent,
    MenubarComponent
  ],
  exports: [
    NavbarComponent,
    MenubarComponent
  ]
})
export class CoreModule { }
