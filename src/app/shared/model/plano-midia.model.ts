import { Utilizador } from './utilizador.model';

export class PlanoMidia {

    codigo: number;
    descricao: string;
    ativo: boolean;
    utilizador: Utilizador = new Utilizador();
}
