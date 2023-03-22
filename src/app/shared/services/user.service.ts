import { Injectable, OnInit } from "@angular/core";
import { environment } from "src/environments/environment";
import { AuthService } from "./auth.service";
import { CurrentUser } from "../interface.model";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";

@Injectable({providedIn: 'root'})

export class UserService implements OnInit{

    public routePrefix: string = environment.php_api_url;
    public currentUser: CurrentUser;
    public hasFriendsEvent = new Subject<CurrentUser[]>();

    constructor(private readonly authService: AuthService, private http: HttpClient){}

    public ngOnInit(): void {}

    public getFriends(friends_list: string){
        if(friends_list === null){
            console.error('NO friends in list')
            return;
        }

        return this.http.post(this.routePrefix + '/friend/get-friends', friends_list.split(","));
    }
}