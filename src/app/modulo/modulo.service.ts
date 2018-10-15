import { Modulo } from './../shared/model/modulo.model';
import { environment } from './../../environments/environment.prod';
import { SipeHttp } from './../seguranca/sipe-http';
import { Injectable } from '@angular/core';


@Injectable()
export class ModuloService {

  modulosUrl: string;

  constructor(private http: SipeHttp) {
    this.modulosUrl = `${environment.apiUrl}/modulos`;
  }

  adicionar(modulo: Modulo): Promise<Modulo> {
    return this.http.post<Modulo>(this.modulosUrl, JSON.stringify(modulo))
      .toPromise();
  }


  buscarPorCodigo(codigo: number): Promise<Modulo> {
    return this.http.get<Modulo>(`${this.modulosUrl}/${codigo}`)
      .toPromise();
  }

  listar(): Promise<Modulo[]> {
    return this.http.get<Modulo[]>(this.modulosUrl)
      .toPromise();
  }

}
