import { ErrorHandlerService } from './../../core/error-handler.service';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalEventoService } from './../local-evento.service';
import { Component, OnInit } from '@angular/core';
import { ToastaService } from 'ngx-toasta';

@Component({
  selector: 'app-local-evento-consulta',
  templateUrl: './local-evento-consulta.component.html',
  styleUrls: ['./local-evento-consulta.component.css']
})
export class LocalEventoConsultaComponent implements OnInit {

  colunas: any[];
  locais = [];

  constructor(
    private localEventoService: LocalEventoService,
    private toastaService: ToastaService,
    private route: ActivatedRoute,
    private router: Router,
    private title: Title,
    private errorHandler: ErrorHandlerService) {

  }

  ngOnInit() {

    this.colunas = [
      { field: 'codigo', header: 'Código' },
      { field: 'nome', header: 'Nome do local' },
      { field: 'cidade', header: 'Cidade' },
    ];

    this.title.setTitle('Sipe - Local para Evento');

  }
}
