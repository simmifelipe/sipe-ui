
import { Injectable } from '@angular/core';
import { SipeHttp } from '../seguranca/sipe-http';
import { Empresa } from '../shared/model/empresa.model';
import { environment } from './../../environments/environment';

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

  listar(): Promise<Empresa[]> {
    return this.http.get<Empresa[]>(this.empresasUrl)
      .toPromise();
  }

}
