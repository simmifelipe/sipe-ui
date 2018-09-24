import { first } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Headers, Http } from '@angular/http';
import { Injectable } from '@angular/core';


import { Utilizador } from './../shared/model/utilizador.model';

@Injectable()
export class UtilizadorService {

  utilizadoresUrl = 'http://localhost:8082/utilizadores';

  constructor(
    private http: HttpClient
  ) { }

  adicionar(utilizador: Utilizador): Promise<any> {
    return this.http.post<Utilizador>(this.utilizadoresUrl, JSON.stringify(utilizador))
      .toPromise();
  }


  buscarPorCodigo(codigo: number): Promise<any> {
    return this.http.get<Utilizador>(`${this.utilizadoresUrl}/${codigo}`)
      .toPromise();
  }

}
