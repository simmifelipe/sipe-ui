import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../seguranca/auth.guard';

import { ParticipanteCadastroComponent } from './participante-cadastro/participante-cadastro.component';

const routes: Routes = [
    { path: 'participantes', component: ParticipanteCadastroComponent, canActivate: [AuthGuard] },
    { path: 'participantes/novo', component: ParticipanteCadastroComponent, canActivate: [AuthGuard] },
    { path: 'participantes/:codigo', component: ParticipanteCadastroComponent, canActivate: [AuthGuard] },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class ParticipanteRoutingModule { }
