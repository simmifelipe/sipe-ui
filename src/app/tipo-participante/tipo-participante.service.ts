import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { SipeHttp } from '../seguranca/sipe-http';

@Injectable({
  providedIn: 'root'
})
export class TipoParticipanteService {

  tipoParticipanteUrl: string;

  constructor(private http: SipeHttp) {
    this.tipoParticipanteUrl = `${environment.apiUrl}/participantes`;
   }
}
