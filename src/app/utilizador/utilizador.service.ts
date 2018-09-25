import { Injectable } from '@angular/core';
import { MoneyHttp } from './../seguranca/money-http';
import { Utilizador } from './../shared/model/utilizador.model';



@Injectable()
export class UtilizadorService {

  utilizadoresUrl = 'http://localhost:8082/utilizadores';

  constructor(private http: MoneyHttp) { }

  adicionar(utilizador: Utilizador): Promise<Utilizador> {
    return this.http.post<Utilizador>(this.utilizadoresUrl, JSON.stringify(utilizador))
      .toPromise();
  }


  buscarPorCodigo(codigo: number): Promise<Utilizador> {
    return this.http.get<Utilizador>(`${this.utilizadoresUrl}/${codigo}`)
      .toPromise();
  }

}
