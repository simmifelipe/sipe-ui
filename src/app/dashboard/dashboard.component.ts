import { Component, OnInit } from '@angular/core';
import { EmpresaService } from '../empresa/empresa.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private empresaService: EmpresaService) { }

  ngOnInit() {

    this.empresaService.buscarPorCodigo(1);
  }

}
