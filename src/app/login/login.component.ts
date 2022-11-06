import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { Login } from './auth-properties';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit{
    public submitted: boolean = false;
    public loginForm = new FormGroup ({
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required, Validators.min(6)])
    });
    public showRegisterForm: boolean = false;
    public showForgotPasswordForm: boolean = false;

    constructor(public authService: AuthService, 
                public router: Router){}

    ngOnInit(): void{}

    get loginControls(){
        return this.loginForm.controls;
    }

    get passwordLength(): number{
        const passLen = this.loginForm.controls['password'].value.length
        if(passLen !== 0){
            return passLen;
        }
        return -1;
    }

    public clear(){ //TODO: implement
        this.loginForm.reset();
    }

    public switchRegister():void{
        this.showRegisterForm = false;
        this.showForgotPasswordForm = !this.showForgotPasswordForm;
    }

    public switchForgotPassword(): void{
        this.showForgotPasswordForm = false;
        this.showRegisterForm =!this.showRegisterForm;
    }

    public submitLogin(): void{
        this.submitted = true;
        //TODO: create login route to backend, verify login details, redirect to /home
        const login:Login ={
            email: this.loginForm.controls['email'].value,
            password: this.loginForm.controls['password'].value,
        };

        this.authService.login(login).pipe().subscribe({
            next:(response:any) =>{
                if(response.status === 200){
                    console.log("login user: ", response);
                    this.authService.currentUser = response.data
                    console.log("curentUser: ", this.authService.currentUser)
                    localStorage.setItem('session', JSON.stringify(response.data));
                    console.log("before redirect");
                    this.router.navigate(['/'])
                }else{
                    return;
                }
            }
        });        
       this.submitted = false;
    }
}

