import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './../seguranca/auth.guard';
import { EmpresaCadastroComponent } from './empresa-cadastro/empresa-cadastro.component';
import { EmpresaSelecaoComponent } from './empresa-selecao/empresa-selecao.component';


const routes: Routes = [
    {
        path: 'empresas',
        component: EmpresaCadastroComponent,
        canActivate: [AuthGuard],
        data:
        {
            roles: ['ROLE_CADASTRAR_EMPRESA', 'ROLE_LISTAR_EMPRESA']
        }
    },
    {
        path: 'empresas/novo',
        component: EmpresaCadastroComponent,
        canActivate: [AuthGuard],
        data:
        {
            roles: ['ROLE_CADASTRAR_EMPRESA']
        }
    },
    {
        path: 'empresas/:codigo',
        component: EmpresaCadastroComponent,
        canActivate: [AuthGuard],
        data:
        {
            roles: ['ROLE_CADASTRAR_EMPRESA', 'ROLE_LISTAR_EMPRESA']
        }

    },
    {
        path: 'empresa-selecao',
        component: EmpresaSelecaoComponent
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class EmpresaRoutingModule { }
