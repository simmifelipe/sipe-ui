import { Empresa } from './empresa.model';
import { Cidade } from './cidade.model';
import { Endereco } from './endereco.model';
import { Modulo } from './modulo.model';

export class Utilizador {

    codigo: number;
    nome: string;
    cpfCnpj: number;
    ie: number;
    inscricaoMunicipal: number;
    quantidadeFiliais: number;
    acessosPermitidos: number;
    ativo = true;
    endereco: Endereco = new Endereco();
    cidade: Cidade = new Cidade();
    modulos: Modulo[] = [];
    empresas: Empresa[] = []

}
