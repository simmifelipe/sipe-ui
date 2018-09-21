import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UtilizadorCadastroComponent } from './utilizador-cadastro/utilizador-cadastro.component';

const routes: Routes = [
    { path: 'utilizadores', component: UtilizadorCadastroComponent },
    { path: 'utilizadores/novo', component: UtilizadorCadastroComponent },
    { path: 'utilizadores/:codigo', component: UtilizadorCadastroComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class UtilizadorRoutingModule { }
