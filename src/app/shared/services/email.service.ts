import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({providedIn: 'root'})

export class EmailServiceComponent{

    public routePrefix: string = 

    constructor(private http: HttpClient){}
    
    public resetPassword(){

    }


}