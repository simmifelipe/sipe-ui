import { Utilizador } from './../shared/model/utilizador.model';
import { Injectable } from '@angular/core';
import { SipeHttp } from '../seguranca/sipe-http';
import { Empresa } from '../shared/model/empresa.model';
import { environment } from './../../environments/environment';
import { Permissao } from '../shared/model/permissao.model';


@Injectable()
export class EmpresaService {

  empresasUrl: string;

  constructor(private http: SipeHttp) {
    this.empresasUrl = `${environment.apiUrl}/empresas`;
  }

  adicionar(empresa: Empresa): Promise<Empresa> {
    return this.http.post<Empresa>(this.empresasUrl, empresa)
      .toPromise();
  }

  buscarPorCodigo(codigo: number): Promise<Empresa> {
    return this.http.get<Empresa>(`${this.empresasUrl}/${codigo}`)
      .toPromise();
  }

  buscarPorUtilizador(codigo: number): Promise<Empresa[]> {
    return this.http.get<Empresa[]>(`${this.empresasUrl}/utilizador/${codigo}`)
      .toPromise();
  }

}
