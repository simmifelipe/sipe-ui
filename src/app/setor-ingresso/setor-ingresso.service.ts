import { SetorIngresso } from './../shared/model/setor-ingresso.model';
import { environment } from './../../environments/environment.prod';
import { SipeHttp } from './../seguranca/sipe-http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SetorIngressoService {

  setorIngressoUrl: string;

  constructor(private http: SipeHttp) {
    this.setorIngressoUrl = `${environment.apiUrl}/setores-ingresso`;
  }

  adicionar(setorIngresso: SetorIngresso): Promise<SetorIngresso> {
    return this.http.post<SetorIngresso>(this.setorIngressoUrl, setorIngresso)
      .toPromise();
  }

  buscarPorCodigo(codigo: number): Promise<SetorIngresso> {
    return this.http.get<SetorIngresso>(`${this.setorIngressoUrl}/${codigo}`)
      .toPromise();
  }

  listar(utilizador: number) {
    return this.http.get<SetorIngresso[]>(`${this.setorIngressoUrl}/utilizador/${utilizador}`);
  }

}
