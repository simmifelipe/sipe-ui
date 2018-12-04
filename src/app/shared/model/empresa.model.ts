import { Cidade } from './cidade.model';
import { Endereco } from './endereco.model';
import { Utilizador } from './utilizador.model';

export class Empresa {

    codigo: number;
    nome: string;
    cnpj: number;
    inscricaoMunicipal: number;
    ie: number;
    ativo = true;
    telefone: string;
    emmail: string;
    endereco: Endereco = new Endereco();
    utilizador: Utilizador = new Utilizador();
    cidade: Cidade = new Cidade();

}
