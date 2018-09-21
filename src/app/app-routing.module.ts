import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaNaoEncontradaComponent } from './core/pagina-nao-encontrada/pagina-nao-encontrada.component';
import { EmpresaCadastroComponent } from './empresa/empresa-cadastro/empresa-cadastro.component';



const routes: Routes = [
    { path: '', redirectTo: 'utilizadores', pathMatch: 'full' },
    { path: 'empresas', component: EmpresaCadastroComponent },
    { path: 'pagina-nao-encontrada', component: PaginaNaoEncontradaComponent },
    { path: '**', redirectTo: 'pagina-nao-encontrada' },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }