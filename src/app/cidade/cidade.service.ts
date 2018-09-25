import { SipeHttp } from '../seguranca/sipe-http';

import { Injectable } from '@angular/core';
import { Cidade } from './../shared/model/cidade.model';

@Injectable()
export class CidadeService {

  cidadesUrl = 'http://localhost:8082/cidades';

  constructor(
    private httpClient: SipeHttp
  ) { }

  pesquisarPorNome(nome: string): Promise<any> {
    return this.httpClient.get<Cidade[]>(`${this.cidadesUrl}/pesquisa/${nome}`)
      .toPromise();
  }

}
