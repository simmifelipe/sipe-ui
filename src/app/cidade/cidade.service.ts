import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Cidade } from './../shared/model/cidade.model';

@Injectable()
export class CidadeService {

  cidadesUrl = "http://localhost:8082/cidades";

  constructor(
    private httpClient: HttpClient
  ) { }

  pesquisarPorNome(nome: string): Promise<any> {
    return this.httpClient.get<Cidade[]>(`${this.cidadesUrl}/pesquisa/${nome}`)
      .toPromise();
  }

}
