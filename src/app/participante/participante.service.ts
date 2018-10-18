import { environment } from './../../environments/environment';
import { SipeHttp } from './../seguranca/sipe-http';
import { Injectable } from '@angular/core';
import { Participante } from '../shared/model/participante.model';

@Injectable({
  providedIn: 'root'
})
export class ParticipanteService {

  participantesUrl: string;

  constructor(private http: SipeHttp) {
    this.participantesUrl = `${environment.apiUrl}/permissoes`;
  }

  adicionar(participante: Participante): Promise<Participante> {
    return this.http.post<Participante>(this.participantesUrl, participante)
      .toPromise();
  }


  buscarPorCodigo(codigo: number): Promise<Participante> {
    return this.http.get<Participante>(`${this.participantesUrl}/${codigo}`)
      .toPromise();
  }
}
