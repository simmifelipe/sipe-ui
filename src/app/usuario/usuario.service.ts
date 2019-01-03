import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { SipeHttp } from '../seguranca/sipe-http';
import { Usuario } from './../shared/model/usuario.model';


@Injectable()
export class UsuarioService {

  usuariosUrl: string;

  constructor(private http: SipeHttp) {
    this.usuariosUrl = `${environment.apiUrl}/usuarios`;
  }

  adicionar(usuario: Usuario) {
    return this.http.post<Usuario>(this.usuariosUrl, usuario);
  }

  buscarPorCodigo(codigo: number): Promise<Usuario> {
    return this.http.get<Usuario>(`${this.usuariosUrl}/${codigo}`)
      .toPromise();
  }

}
