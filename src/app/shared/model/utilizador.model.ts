import { Cidade } from './cidade.model';
import { Endereco } from './endereco.model';

export class Utilizador {

    codigo: number;
    nome: string;
    cpf_cnpj: number;
    ie: number;
    im: number;
    qtd_filiais: number;
    numero_acessos: number;
    ativo: boolean;
    endereco: Endereco = new Endereco();
    cidade: Cidade = new Cidade();

}