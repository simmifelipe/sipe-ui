import { Injectable } from '@angular/core';

import { environment } from './../../environments/environment';
import { SipeHttp } from './sipe-http';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class LogoutService {

  tokensRevokeUrl: string;

  constructor(
    private http: SipeHttp,
    private auth: AuthenticationService
  ) {
    this.tokensRevokeUrl = `${environment.apiUrl}/tokens/revoke`;
  }

  logout() {
    return this.http.delete(this.tokensRevokeUrl, { withCredentials: true })
      .toPromise()
      .then(() => {
        this.auth.limparPermissoes();
        this.auth.limparAccessToken();
      });
  }

}
