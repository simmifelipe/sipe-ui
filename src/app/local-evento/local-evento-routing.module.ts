import { LocalEventoConsultaComponent } from './local-evento-consulta/local-evento-consulta.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../seguranca/auth.guard';

import { LocalEventoCadastroComponent } from './local-evento-cadastro/local-evento-cadastro.component';

const routes: Routes = [
    {
        path: 'local-evento',
        component: LocalEventoCadastroComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'local-evento/novo',
        component: LocalEventoCadastroComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'local-evento/:codigo',
        component: LocalEventoCadastroComponent,
        canActivate: [AuthGuard]
      },

      {
        path: 'local-evento-consulta',
        component: LocalEventoConsultaComponent
      },

];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class LocalEventoRoutingModule { }
