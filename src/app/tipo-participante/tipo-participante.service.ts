import { environment } from './../../environments/environment.prod';
import { SipeHttp } from '../seguranca/sipe-http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TipoParticipanteService {

  tipoParticipanteUrl: string;

  constructor(private http: SipeHttp) {
    this.tipoParticipanteUrl = `${environment.apiUrl}/participantes`;
  }
}
