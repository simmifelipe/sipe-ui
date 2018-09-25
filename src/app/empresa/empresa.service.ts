import { Injectable } from '@angular/core';
import { Empresa } from '../shared/model/empresa.model';
import { MoneyHttp } from './../seguranca/money-http';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  empresasUrl = 'http://localhost:8082/empresas';

  constructor(private http: MoneyHttp) { }

  adicionar(empresa: Empresa): Promise<Empresa> {
    return this.http.post<Empresa>(this.empresasUrl, JSON.stringify(empresa))
      .toPromise();
  }
}
