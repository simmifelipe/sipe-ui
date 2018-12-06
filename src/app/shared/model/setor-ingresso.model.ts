import { Utilizador } from './utilizador.model';

export class SetorIngresso {

    codigo: number;
    descricao: string;
    ativo: boolean;
    utilizador: Utilizador = new Utilizador();
}
