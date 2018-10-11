
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Empresa } from '../shared/model/empresa.model';
import { SipeHttp } from '../seguranca/sipe-http';

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
}
