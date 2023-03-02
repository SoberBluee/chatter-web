import { Router, CanActivate} from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})

export class AuthGuardService implements CanActivate {

    constructor(public authService: AuthService, public router: Router, private http: HttpClient) {
    }

    public canActivate():boolean{
        /**
         * TODO
         * make work when user is logged in 
         */
        if(this.router.url !== '/login' && !this.authService.currentUser){
            this.router.navigate(['login']);
        }

        if(this.authService.currentUser){
            return true;
        }
        return false;
    }

}