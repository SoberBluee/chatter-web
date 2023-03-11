import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { AccountUpdate, EmailUpdate, ApiResponse } from "../shared/interface.model";

@Injectable({providedIn: 'root'})

export class AccountService{

    public routePrefix: string = environment.php_api_url;
    constructor(private http: HttpClient){}

    public checkOldPassword(postData:{oldPassword: string, id: number}): Observable<any>{
        return this.http.post(this.routePrefix + "account/check-old-password", postData);
    }

    public updateAccountDetails(postData: any){
        return this.http.post(this.routePrefix + 'account/update-account-details', postData);
    }
    
    public updatePassword(postData: {password: string, id:number|undefined}): Observable<any>{
        return this.http.post(this.routePrefix + 'account/update-password', postData);
    }

    public updateEmail(postData: EmailUpdate ): Observable<object>{
        return this.http.post(this.routePrefix + 'account/update-email', postData);
    }

    

}