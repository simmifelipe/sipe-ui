import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../seguranca/auth.guard';
import { UsuarioCadastroComponent } from './usuario-cadastro/usuario-cadastro.component';

const routes: Routes = [
    {
        path: 'usuarios',
        component: UsuarioCadastroComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'usuarios/novo',
        component: UsuarioCadastroComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'usuarios/:codigo',
        component: UsuarioCadastroComponent,
        canActivate: [AuthGuard]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class UsuarioRoutingModule { }
