import { Component, OnInit } from '@angular/core';

import { LogoutService } from './../../seguranca/logout.service';
import { AuthenticationService } from './../../seguranca/authentication.service';
import { ErrorHandlerService } from './../error-handler.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    public auth: AuthenticationService,
    private logoutService: LogoutService,
    private errorHandler: ErrorHandlerService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  novoAccessToken() {
    this.auth.obterNovoAccessToken();
  }

  logout() {
    this.logoutService.logout()
      .then(() => {
        this.router.navigate(['/login']);
      })
      .catch(error => this.errorHandler.handle(error));
  }

}
