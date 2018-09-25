import { LogoutService } from './../../seguranca/logout.service';
import { AuthenticationService } from './../../seguranca/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private auth: AuthenticationService,
    private logoutService: LogoutService
    ) { }

  ngOnInit() {
  }

  novoAccessToken() {
    this.auth.obterNovoAccessToken();
  }

}
