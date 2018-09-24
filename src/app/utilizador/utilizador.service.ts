import { first } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Headers, Http } from '@angular/http';
import { Injectable } from '@angular/core';


import { Utilizador } from './../shared/model/utilizador.model';

@Injectable()
export class UtilizadorService {

  utilizadoresUrl = 'http://localhost:8082/utilizadores';

  constructor(
    private http: Http,
    private httpClient: HttpClient
  ) { }

  adicionar(utilizador: Utilizador): Promise<any> {

    const headers = new Headers();
    headers.append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');
    headers.append('Content-Type', 'application/json');

    return this.http.post(this.utilizadoresUrl,
      JSON.stringify(utilizador))
      .toPromise()
      .then(response => response.json());
  }


  buscarPorCodigo(codigo: number): Observable<Utilizador> {

    // const headers = new Headers();
    // headers.append('Authorization', 'Bearer ' + localStorage.getItem('token'));

    return this.httpClient.get<Utilizador>(`${this.utilizadoresUrl}/${codigo}`)
      .pipe(first());

  }

}
