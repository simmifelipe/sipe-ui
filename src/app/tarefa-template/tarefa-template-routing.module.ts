import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../seguranca/auth.guard';
import { TarefaTemplateCadastroComponent } from './tarefa-template-cadastro/tarefa-template-cadastro.component';

const routes: Routes = [
    {
        path: 'tarefatemplate',
        component: TarefaTemplateCadastroComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'tarefatemplate/novo',
        component: TarefaTemplateCadastroComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'tarefatemplate/:codigo',
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
