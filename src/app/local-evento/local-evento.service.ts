import { LocalEvento } from './../shared/model/local-evento.model';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { SipeHttp } from '../seguranca/sipe-http';

@Injectable({
  providedIn: 'root'
})
export class LocalEventoService {

  localEventoUrl: string;

  constructor(private http: SipeHttp) {
    this.localEventoUrl = `${environment.apiUrl}/local-evento`;
  }

  adicionar(localEvento: LocalEvento): Promise<LocalEvento> {
    return this.http.post<LocalEvento>(this.localEventoUrl, JSON.stringify(localEvento))
      .toPromise();
  }


  buscarPorCodigo(codigo: number): Promise<LocalEvento> {
    return this.http.get<LocalEvento>(`${this.localEventoUrl}/${codigo}`)
      .toPromise();
  }

  listar(): Promise<LocalEvento[]> {
    return this.http.get<LocalEvento[]>(this.localEventoUrl)
      .toPromise();
  }

}
