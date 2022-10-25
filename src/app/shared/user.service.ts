import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Register, UpdatedUser } from '../login/auth-properties';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { UrlDefinitions } from './url-endpoints'

@Injectable({providedIn: 'root'})

export class UserService{
    constructor(private http: HttpClient, private urls: UrlDefinitions){}

    public storeUser(user: Register):Observable<unknown>{
        //TODO: create interceptor to add headers to every request sent to endpoint
        const headers = new HttpHeaders()
            .set('Access-Control-Allow-Origin', '*')
            .set('Content-Type', 'application/json');
        return this.http.post(this.urls.addUser, user, {headers});  
    }

    //pass in parameters that only need to be updated
    //could pass in a user object that only contains the the values that need to be updated
    //return observable boolean
    public updateUser(body:UpdatedUser):Observable<unknown>{
        const header = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
        return this.http.post(this.urls.updateUser, {headers: header, body});
    }
    //return observable boolean
    public deleteUser(userId: number){
        const headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
        return this.http.delete(this.urls.deleteUser, {headers, body: JSON.stringify(userId)});
    }

}