import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { SipeHttp } from '../seguranca/sipe-http';
import { Utilizador } from './../shared/model/utilizador.model';



@Injectable()
export class UtilizadorService {

  utilizadoresUrl: string;

  constructor(private http: SipeHttp) {
    this.utilizadoresUrl = `${environment}/utilizadores`;
  }

  adicionar(utilizador: Utilizador): Promise<Utilizador> {
    return this.http.post<Utilizador>(this.utilizadoresUrl, JSON.stringify(utilizador))
      .toPromise();
  }


  buscarPorCodigo(codigo: number): Promise<Utilizador> {
    return this.http.get<Utilizador>(`${this.utilizadoresUrl}/${codigo}`)
      .toPromise();
  }

}
