import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';
import { Register } from './../auth-properties';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
    public emailConfirmFail: boolean = false;
    public passwordConfirmFail: boolean = false;
    public noDetailsError: boolean = false;


    public registerForm =  new FormGroup({
        username: new FormControl('', Validators.required),
        firstname: new FormControl('', Validators.required),
        surname: new FormControl('', Validators.required),
        rEmail: new FormControl('', [Validators.required, Validators.email]),
        phoneNumber: new FormControl('', [Validators.required]),
        confirmEmail: new FormControl('', Validators.required),
        rPassword: new FormControl('', [Validators.required, Validators.min(6)]),
        confirmPassword: new FormControl('', [Validators.required, Validators.min(6)])
    });


    constructor(public authService: AuthService, public router: Router){}
    
    ngOnInit(): void {}

    public clear(){
        this.registerForm.reset();
    }

    public get compareEmail(): boolean{
        const result = this.registerForm.value.rEmail !== this.registerForm.value.confirmEmail ? true : false;
        return result;
    }

    public get comparePassword(): boolean{
        const result =  this.registerForm.value.rPassword !== this.registerForm.value.confirmPassword ? true : false;
        return result;
    }

    public get compareLogin(): boolean{
        return (this.registerForm.value.rEmail !== this.registerForm.value.confirmEmail) &&
                        (this.registerForm.value.rPassword !== this.registerForm.value.confirm)   
    }

    public get comparePasswordInput():boolean{
        return this.registerForm.value.rPassword.$touched && this.registerForm.value.confirmPassword.$touched;
    }

    public get registerControls(){
        return this.registerForm.controls;
    }

    public submitRegister(): void{
        const registerDetails: Register = {
            user_name: this.registerForm.value.username,
            firstname: this.registerForm.value.firstname,
            surname: this.registerForm.value.surname,
            phone_number: this.registerForm.value.phoneNumber,
            email: this.registerForm.value.rEmail,
            password: this.registerForm.value.rPassword,
        }

        if(registerDetails.email === '' && registerDetails.password === ''){
            this.noDetailsError = true;
            return;
        }

        this.authService.register(registerDetails).pipe().subscribe({
            next: (response:any) =>{
                if(response.status === 200){
                    this.router.navigate(['/'])
                }
                //display error message
            },
            error: (error)=>{
                console.error("ERROR : ", error);
            }
        });

        //display error message
    }

    private generateToken(){

    }
}

