import { TipoParticipante } from './tipo-participante.model';
import { Endereco } from './endereco.model';
import { Utilizador } from './utilizador.model';
import { Cidade } from './cidade.model';

export class Participante {

    codigo: number;
    nome: string;
    nomeFantasia: string;
    cpfCnpj: number;
    inscricaoEstadual: number;
    inscricaoMunicipal: number;
    contato: string;
    telefone: string;
    email: string;
    observacoes: string;
    ativo: boolean = true;
    utilizador = new Utilizador();
    endereco = new Endereco();
    cidade = new Cidade();
    tipoPessoa: string;
    tiposParticipante: TipoParticipante[] = [];


}