import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../seguranca/auth.guard';
import { TipoIngressoCadastroComponent } from './tipo-ingresso-cadastro/tipo-ingresso-cadastro.component';


const routes: Routes = [
    {
        path: 'tipos-ingresso',
        component: TipoIngressoCadastroComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'tipos-ingresso/novo',
        component: TipoIngressoCadastroComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'tipos-ingresso/:codigo',
        component: TipoIngressoCadastroComponent,
        canActivate: [AuthGuard]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class TipoIngressoRoutingModule { }
