import { Cidade } from './cidade.model';
import { Endereco } from './endereco.model';

export class Utilizador {

    codigo: number;
    nome: string;
    cpfCnpj: number;
    ie: number;
    inscricaoMunicipal: number;
    quantidadeFiliais: number;
    acessosPermitidos: number;
    ativo: boolean;
    endereco: Endereco = new Endereco();
    cidade: Cidade = new Cidade();

}