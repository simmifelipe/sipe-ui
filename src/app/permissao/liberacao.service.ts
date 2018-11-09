import { Injectable } from '@angular/core';

import { SipeHttp } from '../seguranca/sipe-http';
import { environment } from './../../environments/environment';
import { Liberacao } from './../shared/model/liberacao.model';

@Injectable({
  providedIn: 'root'
})
export class LiberacaoService {

  liberacoesUrl: string;

  constructor(private http: SipeHttp) {
    this.liberacoesUrl = `${environment.apiUrl}/liberacoes`;
  }

  buscarPorUsuario(codigoUsuario: number): Promise<Liberacao[]> {
    return this.http.get<Liberacao[]>(`${this.liberacoesUrl}/usuario/${codigoUsuario}`)
      .toPromise();
  }
}
