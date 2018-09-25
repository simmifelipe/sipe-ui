import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './../seguranca/auth.guard';
import { UtilizadorCadastroComponent } from './utilizador-cadastro/utilizador-cadastro.component';

const routes: Routes = [
    {
        path: 'utilizadores',
        component: UtilizadorCadastroComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'utilizadores/novo',
        component: UtilizadorCadastroComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'utilizadores/:codigo',
        component: UtilizadorCadastroComponent,
        canActivate: [AuthGuard]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class UtilizadorRoutingModule { }
