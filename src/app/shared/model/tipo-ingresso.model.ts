import { Utilizador } from './utilizador.model';

export class TipoIngresso {

    codigo: number;
    descricao: string;
    ativo: boolean = true;
    utilizador: Utilizador = new Utilizador();
}
