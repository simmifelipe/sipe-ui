import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { ToastaService } from 'ngx-toasta';
import { SelectItem } from 'primeng/components/common/selectitem';

import { ErrorHandlerService } from './../../core/error-handler.service';
import { TarefaTemplate } from './../../shared/model/tarefa-template.model';
import { TarefaTemplateService } from './../tarefa-template.service';

@Component({
  selector: 'app-tarefa-template-cadastro',
  templateUrl: './tarefa-template-cadastro.component.html',
  styleUrls: ['./tarefa-template-cadastro.component.css']
})

export class TarefaTemplateCadastroComponent implements OnInit {

  colunas: any[];

  meses: SelectItem[];

  selectMeses: any[] = [];

  tarefaTemplate: TarefaTemplate = new TarefaTemplate();

  constructor(
    private tarefaTemplateService: TarefaTemplateService,
    private toastaService: ToastaService,
    private route: ActivatedRoute,
    private router: Router,
    private title: Title,
    private errorHandler: ErrorHandlerService) {
    this.meses = [
      { label: 'Janeiro', value: '01' },
      { label: 'Fevereiro', value: '02' },
      { label: 'Março', value: '03' },
      { label: 'Abril', value: '04' },
      { label: 'Maio', value: '05' },
      { label: 'Junho', value: '06' },
      { label: 'Julho', value: '07' },
      { label: 'Agosto', value: '08' },
      { label: 'Setembro', value: '09' },
      { label: 'Outubro', value: '10' },
      { label: 'Novembro', value: '11' },
      { label: 'Dezembro', value: '12' }
    ];
  }

  ngOnInit() {
    this.colunas = [
      { field: 'descricao', header: 'Descrição' },
      { field: 'tipo', header: 'Tipo' },
      { field: 'ativo', header: 'Ativo' },
    ];

    this.title.setTitle('Sipe - Template de Tarefas');

    const codigoTarefaTemplate = this.route.snapshot.params['codigo'];
    if (codigoTarefaTemplate) {
      this.carregarTarefaTemplate(codigoTarefaTemplate);
    }
  }

  carregarTarefaTemplate(codigo: number) {
    this.tarefaTemplateService.buscarPorCodigo(codigo)
      .then(tarefa => this.tarefaTemplate = tarefa)
      .catch(erro => this.errorHandler.handle(erro));
  }

  salvar(form: FormControl) {
    this.tarefaTemplateService.adicionar(this.tarefaTemplate)
      .then(tarefaTemplateAdicionada => {

        this.toastaService.success('Tarefa salva com sucesso!');
        this.router.navigate(['/tarefa-template', tarefaTemplateAdicionada.codigo]);
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  novo(form: FormControl) {

    form.reset();
    setTimeout(function () {
      this.tarefaTemplate = new TarefaTemplate();
    }.bind(this), 1);

    this.router.navigate(['/tarefastemplate/novo']);
  }

}
