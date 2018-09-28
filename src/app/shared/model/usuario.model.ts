import { Utilizador } from './utilizador.model';

export class Usuario {

    codigo: number;
    nome: string;
    email: string;
    senha: string;
    ativo = true;
    utilizador: Utilizador = new Utilizador();
}
