import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../seguranca/auth.guard';
import { PermissaoCadastroComponent } from './permissao-cadastro/permissao-cadastro.component';

const routes: Routes = [
    {
        path: 'permissoes',
        component: PermissaoCadastroComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'permissoes/novo',
        component: PermissaoCadastroComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'permissoes/:codigo',
        component: PermissaoCadastroComponent,
        canActivate: [AuthGuard]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class PermissaoRoutingModule { }
