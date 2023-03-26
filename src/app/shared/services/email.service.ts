import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({providedIn: 'root'})

export class EmailServiceComponent{

    public routePrefix: string = environment.php_api_url;

    constructor(private http: HttpClient){}
    
    public resetPassword(email: string){ 
        const params = new HttpParams().set('email', email);
        return this.http.get(this.routePrefix + 'mail/email-change-email', {params});
    }


}