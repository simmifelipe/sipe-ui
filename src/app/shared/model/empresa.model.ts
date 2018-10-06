import { Endereco } from './endereco.model';
import { Utilizador } from './utilizador.model';

export class Empresa {

    codigo: number;
    nome: string;
    cnpj: number;
    inscricaoMunicipal: number;
    ie: number;
    ativo: boolean = true;
    endereco: Endereco = new Endereco();
    utilizador: Utilizador = new Utilizador();

}
