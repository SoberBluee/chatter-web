import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";

@Injectable({providedIn: 'root'})

export class AccountService{

    public routePrefix: string = environment.php_api_url;
    constructor(private http: HttpClient){}

    public checkOldPassword(postData:{oldPassword: string, id: number}): Observable<any>{
        return this.http.post(this.routePrefix + "user/check-old-password", postData);
    }

    public updatePassword(postData: {password: string, id:number}): Observable<any>{
        return this.http.post(this.routePrefix + 'user/update-password', postData);
    }
}