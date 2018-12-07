import { Utilizador } from './utilizador.model';

export class SetorIngresso {

    codigo: number;
    descricao: string;
    ativo: boolean = true;
    utilizador: Utilizador = new Utilizador();
}
