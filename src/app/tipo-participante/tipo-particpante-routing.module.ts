import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './../seguranca/auth.guard';
import { TipoParticipanteCadastroComponent } from './tipo-participante-cadastro/tipo-participante-cadastro.component';

const routes: Routes = [
    {
        path: 'tipos-participante',
        component: TipoParticipanteCadastroComponent,
        canActivate: [AuthGuard],
        data:
        {
            roles: ['ROLE_CADASTRAR_TIPO_PARTICIPANTE', 'ROLE_LISTAR_TIPO_PARTICIPANTE']
        }
    },
    {
        path: 'tipos-participante/novo',
        component: TipoParticipanteCadastroComponent,
        canActivate: [AuthGuard],
        data:
        {
            roles: ['ROLE_CADASTRAR_TIPO_PARTICIPANTE']
        }
    },
    {
        path: 'tipos-participante/:codigo',
        component: TipoParticipanteCadastroComponent,
        canActivate: [AuthGuard],
        data:
        {
            roles: ['ROLE_CADASTRAR_TIPO_PARTICIPANTE', 'ROLE_LISTAR_TIPO_PARTICIPANTE']
        }
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class TipoParticipanteRoutingModule { }
