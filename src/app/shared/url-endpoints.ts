import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})

export class UrlDefinitions{
    public addUser = '/api/User';
    public getUser = '/api/';
    public updateUser = '/api/User/update';
    public deleteUser = '/api/User/delete';
}


