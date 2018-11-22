import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../seguranca/auth.guard';
import { PlanoMidiaCadastroComponent } from './plano-midia-cadastro/plano-midia-cadastro.component';


const routes: Routes = [
    {
        path: 'plano-midia',
        component: PlanoMidiaCadastroComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'plano-midia/novo',
        component: PlanoMidiaCadastroComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'plano-midia/:codigo',
        component: PlanoMidiaCadastroComponent,
        canActivate: [AuthGuard]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class PlanoMidiaRoutingModule { }
