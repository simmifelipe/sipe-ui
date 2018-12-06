import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../seguranca/auth.guard';
import { SetorIngressoCadastroComponent } from './setor-ingresso-cadastro/setor-ingresso-cadastro.component';


const routes: Routes = [
    {
        path: 'setores-ingresso',
        component: SetorIngressoCadastroComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'setores-ingresso/novo',
        component: SetorIngressoCadastroComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'setores-ingresso/:codigo',
        component: SetorIngressoCadastroComponent,
        canActivate: [AuthGuard]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class SetorIngressoRoutingModule { }
