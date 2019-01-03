import { Liberacao } from './liberacao.model';
import { Permissao } from './permissao.model';
import { Utilizador } from './utilizador.model';

export class Usuario {

    codigo: number;
    nome: string;
    email: string;
    senha: string;
    ativo = true;
    permissoes: Permissao[] = [];
    utilizador: Utilizador = new Utilizador();
    liberacoes: Liberacao[] = [];
}
