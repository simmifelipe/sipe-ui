import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './../seguranca/auth.guard';
import { UtilizadorCadastroComponent } from './utilizador-cadastro/utilizador-cadastro.component';

const routes: Routes = [
    {
        path: 'utilizadores',
        component: UtilizadorCadastroComponent,
        canActivate: [AuthGuard],
        data:
        {
            roles: ['ROLE_CADASTRAR_UTILIZADOR', 'ROLE_LISTAR_UTILIZADOR']
        }
    },
    {
        path: 'utilizadores/novo',
        component: UtilizadorCadastroComponent,
        canActivate: [AuthGuard],
        data:
        {
            roles: ['ROLE_CADASTRAR_UTILIZADOR']
        }
    },
    {
        path: 'utilizadores/:codigo',
        component: UtilizadorCadastroComponent,
        canActivate: [AuthGuard],
        data:
        {
            roles: ['ROLE_CADASTRAR_UTILIZADOR', 'ROLE_LISTAR_UTILIZADOR']
        }
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class UtilizadorRoutingModule { }
