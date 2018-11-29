import { PlanoMidia } from './../shared/model/plano-midia.model';
import { environment } from './../../environments/environment';
import { SipeHttp } from './../seguranca/sipe-http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlanoMidiaService {

  planoMidiaUrl: string;

  constructor(private http: SipeHttp) {
    this.planoMidiaUrl = `${environment.apiUrl}/plano-midia`;
  }

  adicionar(planoMidia: PlanoMidia): Promise<PlanoMidia> {
    return this.http.post<PlanoMidia>(this.planoMidiaUrl, JSON.stringify(planoMidia))
      .toPromise();
  }

  buscarPorCodigo(codigo: number): Promise<PlanoMidia> {
    return this.http.get<PlanoMidia>(`${this.planoMidiaUrl}/${codigo}`)
      .toPromise();
  }

}
