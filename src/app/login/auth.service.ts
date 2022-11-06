
import { Injectable, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Login, Register} from "./auth-properties";
import { UserService } from "../shared/user.service";
import { CurrentUesr } from "../shared/interface.model";
@Injectable({providedIn: 'root'})

export class AuthService implements OnInit{
    public routePrefix: string = 'http://127.0.0.1:8000/api/v1';
    public currentUser: CurrentUesr | null; //create subject/observable to detect a new user

    constructor(private http: HttpClient, private userService: UserService){}

    public ngOnInit(): void{}


    public login(loginDetails: Login){
        return this.http.post(this.routePrefix + '/user/login', loginDetails);
    }

    public register(user: Register){
        return this.http.post(this.routePrefix + '/user/create-user', user);
    }

    public superLogin(){
        return this.http.post(this.routePrefix + '/user/super-logjn', {superLogin: true});
    }


}