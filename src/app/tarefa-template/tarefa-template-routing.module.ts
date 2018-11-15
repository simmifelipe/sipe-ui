import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../seguranca/auth.guard';
import { TarefaTemplateCadastroComponent } from './tarefa-template-cadastro/tarefa-template-cadastro.component';

const routes: Routes = [
    {
        path: 'tarefa-template',
        component: TarefaTemplateCadastroComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'tarefa-template/novo',
        component: TarefaTemplateCadastroComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'tarefa-template/:codigo',
        component: TarefaTemplateCadastroComponent,
        canActivate: [AuthGuard]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class TarefaTemplateRoutingModule { }
