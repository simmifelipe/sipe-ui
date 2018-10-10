import { Modulo } from './modulo.model';

export class Permissao {

    codigo: number;
    descricao: string;
    nivel: number;
    modulo: Modulo = new Modulo();
}
