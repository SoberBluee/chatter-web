
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Login, Register} from "./auth-properties";
import { UserService } from "../shared/user.service";
import { pipe } from "rxjs";

@Injectable({providedIn: 'root'})

export class AuthService{
    public validUser: boolean = false;
    //priv levels
        //0 superAdmin
        //1 admin
        //2 default 
        //3 low
    public validLogins: Login[] =[
        {'email': 'admin@mail.com', 'password': 'admin111', 'privLevel': 2},
        {'email': 'ethan@mail.com', 'password': '111111', 'privLevel':1},
        {'email': 'david@mail.com', 'password': '222222', 'privLevel':3},
        {'email': 'lloyd@mail.com', 'password': '333333', 'privLevel':4}
    ]

    public createdUser: Register[] = [] //create subject/observable to detect a new user

    public loginUrl: string = '/login'

    constructor(private http: HttpClient, private userService: UserService){}
    //TEMP FUNCTION
    public verifyLogin(login: Login):boolean{
        const userLogin = JSON.stringify(login);
        this.validLogins.forEach((vLogin=>{
            const newLogin = JSON.stringify(vLogin);
            if(userLogin === newLogin){
                this.validUser = true;
            }
        }))
        return this.validUser;
    }

    public login(loginDetails: Login){
        return this.http.post<Login>(this.loginUrl,loginDetails); //TODO: create route to endend to verify login
    }

    public register(user: Register){
        this.userService.storeUser(user).subscribe({
            next: (response: unknown) => {
                if(response){
                    console.log('user registered');
                }
                console.log('something went wrong');
            },
            error: (error) => {
                console.log(error);
            }
        });
    }

    public superLogin(){

    }


}