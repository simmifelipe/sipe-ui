import { Cidade } from './cidade.model';
import { Utilizador } from './utilizador.model';
export class LocalEvento {

  codigo: number;
  nome: string;
  responsavel: string;
  telefone: string;
  capacidade: number;
  observacoes: string;
  cidade: Cidade = new Cidade();
  utilizador: Utilizador = new Utilizador();
}
