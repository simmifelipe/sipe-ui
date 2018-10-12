import { Cidade } from './cidade.model';
import { Utilizador } from './utilizador.model';

export class TarefaTemplate {

    codigo: number;
    descricao: string;
    tipo: TipoTarefaTemplate;
    periodo: string;
    ativo = true;
    cidade: Cidade = new Cidade();
    utilizador: Utilizador = new Utilizador();
}
