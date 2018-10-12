import { Injectable } from '@angular/core';

import { environment } from './../../environments/environment';
import { SipeHttp } from './../seguranca/sipe-http';
import { TarefaTemplate } from './../shared/model/tarefa-template.model';

@Injectable()
export class TarefaTemplateService {

  tarefasTemplateUrl: string;

  constructor(private http: SipeHttp) {
    this.tarefasTemplateUrl = `${environment}/tarefastemplate`;
  }

  adicionar(tarefaTemplate: TarefaTemplate): Promise<TarefaTemplate> {
    return this.http.post<TarefaTemplate>(this.tarefasTemplateUrl, JSON.stringify(tarefaTemplate))
      .toPromise();
  }


  buscarPorCodigo(codigo: number): Promise<TarefaTemplate> {
    return this.http.get<TarefaTemplate>(`${this.tarefasTemplateUrl}/${codigo}`)
      .toPromise();
  }

}
