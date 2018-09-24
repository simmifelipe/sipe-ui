import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpresaCadastroComponent } from './empresa-cadastro/empresa-cadastro.component';


const routes: Routes = [
    { path: 'empresas', component: EmpresaCadastroComponent },
    { path: 'empresas/:codigo', component: EmpresaCadastroComponent },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class EmpresaRoutingModule { }
