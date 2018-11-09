import { Injectable } from '@angular/core';
import { SipeHttp } from './../seguranca/sipe-http';
import { environment } from './../../environments/environment.prod';

import { Permissao } from '../shared/model/permissao.model';

@Injectable()
export class PermissaoService {

  permissoesUrl: string;

  constructor(private http: SipeHttp) {
    this.permissoesUrl = `${environment.apiUrl}/permissoes`;
  }

  adicionar(permissao: Permissao): Promise<Permissao> {
    return this.http.post<Permissao>(this.permissoesUrl, JSON.stringify(permissao))
      .toPromise();
  }

  buscarPorCodigo(codigo: number): Promise<Permissao> {
    return this.http.get<Permissao>(`${this.permissoesUrl}/${codigo}`)
      .toPromise();
  }


}
