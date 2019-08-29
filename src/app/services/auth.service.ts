import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from "../models/usuario.model";
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty';
    private apikey = 'AIzaSyAPUlJKoxBVoPSP7SYKCCirGZUzsixK9Lg';

    userToken: string;

    constructor(private http: HttpClient) {
        // this.loadToken();
    }

    logout() {
        //localStorage.removeItem('token');
    }
    
    login(usuario: UsuarioModel) {
        const authData = {
            ...usuario,
            returnSecureToken: true
        };
        return this.http.post(
            `${ this.url }/verifyPassword?key=${ this.apikey }`,
            authData
        ).pipe(
            map( resp => {
            // console.log('Entro en mapa de del RXJS');
            // this.saveToken( resp['idToken'] );
            return resp;
            })
        );
    }
    
    newUser(usuario: UsuarioModel) {
        // Asigna valores de usuario a data
        const authData = {
            ...usuario,
            returnSecureToken: true
        };

        return this.http.post(
            `${ this.url }/signupNewUser?key=${ this.apikey }`,
            authData
        ).pipe(
            map( resp => {
            // console.log('Entro en mapa de del RXJS');
            // this.saveToken( resp['idToken'] );
            return resp;
            })
        );
    }
    
    /* private saveToken(idToken: string) {
        this.userToken = idToken;
        localStorage.setItem('token', idToken);

        let hoy = new Date();
        hoy.setSeconds( 3600 ); // 3600 valor por default del token

        localStorage.setItem('expira', hoy.getTime().toString());
        }

        loadToken() {
        if (localStorage.getItem('token')) {
            this.userToken = localStorage.getItem('token');
        } else {
            this.userToken = '';
        }

        return this.userToken;
    }
    
    statusAuntenticate(): boolean {
        // return this.userToken.length > 2;

        if ( this.userToken.length < 2 ) {
            return false;
        }

        const expira = Number(localStorage.getItem('expira'));
        const expiraDate = new Date();
        expiraDate.setTime(expira);
        if ( expiraDate > new Date() ) {
            return true;
        } else {
            return false;
        }

    } */
}