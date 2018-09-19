import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Utilizador } from '../shared/model/utilizador.model';

@Injectable()
export class UtilizadorService {

  utilizadoresUrl = 'http://localhost:8082/utilizadores';

  constructor(private http: Http) { }

  adicionar(utilizador: Utilizador): Promise<any> {
    const headers = new Headers();

    return this.http.post(this.utilizadoresUrl,
      JSON.stringify(utilizador), { headers: headers })
      .toPromise()
      .then(response => {
        console.log(response.json());
      });
  }
}
