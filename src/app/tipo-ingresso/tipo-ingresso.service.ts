import { TipoIngresso } from './../shared/model/tipo-ingresso.model';
import { environment } from './../../environments/environment.prod';
import { SipeHttp } from './../seguranca/sipe-http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TipoIngressoService {

  tipoIngressoUrl: string;

  constructor(private http: SipeHttp) {
    this.tipoIngressoUrl = `${environment.apiUrl}/tipos-ingresso`;
  }

  adicionar(tipoIngresso: TipoIngresso): Promise<TipoIngresso> {
    return this.http.post<TipoIngresso>(this.tipoIngressoUrl, tipoIngresso)
      .toPromise();
  }

  buscarPorCodigo(codigo: number): Promise<TipoIngresso> {
    return this.http.get<TipoIngresso>(`${this.tipoIngressoUrl}/${codigo}`)
      .toPromise();
  }

  listar(utilizador: number) {
    return this.http.get<TipoIngresso[]>(`${this.tipoIngressoUrl}/utilizador/${utilizador}`);
  }

}
