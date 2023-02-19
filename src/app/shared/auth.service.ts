
import { Injectable, OnInit } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { Login, Register} from "../login/auth-properties";
import { CurrentUser } from "./interface.model";
import {Subject} from 'rxjs';

@Injectable({providedIn: 'root'})

export class AuthService implements OnInit{
    public routePrefix: string = environment.php_api_url;
    public currentUser: CurrentUser | null; //create subject/observable to detect a new user
    public emitCurrentUser = new Subject<CurrentUser>();

    constructor(private http: HttpClient){}

    public ngOnInit(): void{
    }

    public setCurrentUser(user: CurrentUser): void{
        user.lastOnline = new Date();
        user.status =  'ACTIVE'
        this.currentUser = user;
        this.emitCurrentUser.next(user);
        console.log("user fro request: ", this.currentUser)
        return;
    }

    public login(loginDetails: Login){
        console.log('login route: ', this.routePrefix);
        console.log('login details: ', loginDetails);
        return this.http.post(this.routePrefix + 'user/login', loginDetails);
    }

    public register(user: Register){
        return this.http.post(this.routePrefix + 'user/create-user', user);
    }

    public superLogin(){
        return this.http.post(this.routePrefix + 'user/super-login', {superLogin: true});
    }


}