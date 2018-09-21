import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Cidade } from './../shared/model/cidade.model';

@Injectable()
export class CidadeService {

  cidadesUrl = "http://localhost:8082/cidades";

  constructor(private http: Http) { }

  pesquisarPorNome(nome: string): Promise<Cidade[]> {
    const headers = new Headers();
    headers.append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');

    return this.http.get(`${this.cidadesUrl}/pesquisa/${nome}`, { headers: headers })
      .toPromise()
      .then(response => response.json());
  }

}
