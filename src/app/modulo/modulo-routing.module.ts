import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../seguranca/auth.guard';

import { ModuloCadastroComponent } from './modulo-cadastro/modulo-cadastro.component';

const routes: Routes = [
    {
        path: 'modulos',
        component: ModuloCadastroComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'modulos/novo',
        component: ModuloCadastroComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'modulos/:codigo',
        component: ModuloCadastroComponent,
        canActivate: [AuthGuard]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class ModuloRoutingModule { }
