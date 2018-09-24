
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelper } from 'angular2-jwt';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {

    oauthTokenUrl = 'http://localhost:8082/oauth/token';
    jwtPayload: any;

    constructor(
        private http: HttpClient,
        private jwtHelper: JwtHelper
    ) {

        this.carregarAccessToken();
    }

    login(usuario: string, senha: string) {

        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic YW5ndWxhcjpnM3Nmd3JAbmd1bEBy'
            }),
            withCredentials: true
        };
        const body = `username=${usuario}&password=${senha}&grant_type=password`;

        return this.http.post<any>(this.oauthTokenUrl, body, httpOptions)
            .pipe(map(token => {
                if (token && token.access_token) {
                    this.jwtPayload = this.jwtHelper.decodeToken(token.access_token);
                    this.armazenarToken(token.access_token);
                }
                return token;
            }));
    }


    obterNovoAccessToken(): Promise<void> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Basic YW5ndWxhcjpnM3Nmd3JAbmd1bEBy'
            }),
            withCredentials: true
        };
        const body = 'grant_type=refresh_token';

        return this.http.post<any>(this.oauthTokenUrl, body, httpOptions)
            .toPromise()
            .then(response => {
                this.armazenarToken(response.json().access_token);

                console.log('Novo access token criado');
                return Promise.resolve(null);
            })
            .catch(response => {
                console.log('Erro ao renovar token', response);
                return Promise.resolve(null);
            });
    }

    armazenarToken(access_token: string) {
        localStorage.setItem('access_token', access_token);
    }

    logout() {
        localStorage.removeItem('access_token');
    }

    temPermissao(permissao: string) {
        return this.jwtPayload && this.jwtPayload.authorities.includes(permissao);
    }

    carregarAccessToken() {
        const token = localStorage.getItem('access_token');
        if (token) {
            this.jwtPayload = this.jwtHelper.decodeToken(token);
        }
    }


}
