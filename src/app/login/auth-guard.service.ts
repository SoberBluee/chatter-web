import { Router, CanActivate} from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({providedIn: 'root'})

export class AuthGuardService implements CanActivate {

    constructor(public authService: AuthService, public router: Router){

    }

    public canActivate():boolean{
        // if(!this.authService.isAuthenticated())
        //TODO: Create auth service to check if user is logged in
        console.log('AUTH CHECK: canActivate');
        return true;
    }

}