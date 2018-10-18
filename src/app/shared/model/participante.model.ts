import { Endereco } from './endereco.model';
import { Utilizador } from './utilizador.model';
import { Cidade } from './cidade.model';

export class Participante {

    codigo: number;
    nome: string;
    nomeFantasia: string;
    cpf_cnpj: number;
    inscricaoEstadual: number;
    inscricaoMunicipal: number;
    contato: string;
    telefone: string;
    email: string;
    observacoes: string;
    ativo: boolean = true;
    utilizador: Utilizador = new Utilizador();
    endereco: Endereco = new Endereco();
    cidade: Cidade = new Cidade();
    tipoPessoa: TipoPessoa;


}