import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-utilizador-cadastro',
  templateUrl: './utilizador-cadastro.component.html',
  styleUrls: ['./utilizador-cadastro.component.css']
})
export class UtilizadorCadastroComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  value = true;

  types = [
    { label: 'Paypal', value: 'PayPal' },
    { label: 'Visa', value: 'Visa' }
  ];

}
