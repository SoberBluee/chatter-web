import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable()

export class AccountServiceComponent{

    public routePrefix: string = environment.php_api_url;

    constructor(private http: HttpClient){}

    public checkOldPassword(user_id: number, oldPassword: string): Observable<any>{
        return this.http.get(this.routePrefix + "user/check-old-password");
    }


}