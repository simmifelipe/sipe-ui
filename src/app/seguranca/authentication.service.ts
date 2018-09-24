
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {

    oauthTokenUrl = 'http://localhost:8082/oauth/token';

    constructor(private http: HttpClient) { }

    login(usuario: string, senha: string) {

        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic YW5ndWxhcjpnM3Nmd3JAbmd1bEBy'
            })
        };
        const body = `username=${usuario}&password=${senha}&grant_type=password`;

        return this.http.post<any>(this.oauthTokenUrl, body, httpOptions)
            .pipe(map(token => {
                if (token) {
                    localStorage.setItem('token', token);
                }
                return token;
            }));
    }

    logout() {
        localStorage.removeItem('token');
    }
}
