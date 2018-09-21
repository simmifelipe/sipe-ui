import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Empresa } from '../shared/model/empresa.model';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  empresasUrl = 'http://localhost:8082/empresas';

  constructor(private http: Http) { }

  adicionar(empresa: Empresa): Promise<Empresa> {

    const headers = new Headers();
    headers.append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');
    headers.append('Content-Type', 'application/json');

    return this.http.post(this.empresasUrl,
      JSON.stringify(empresa), { headers: headers })
      .toPromise()
      .then(response => response.json());
  }
}
