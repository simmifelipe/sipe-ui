import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './../seguranca/auth.guard';
import { EmpresaCadastroComponent } from './empresa-cadastro/empresa-cadastro.component';


const routes: Routes = [
    { path: 'empresas', component: EmpresaCadastroComponent, canActivate: [AuthGuard] },
    { path: 'empresas/novo', component: EmpresaCadastroComponent, canActivate: [AuthGuard] },
    { path: 'empresas/:codigo', component: EmpresaCadastroComponent, canActivate: [AuthGuard] },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class EmpresaRoutingModule { }
