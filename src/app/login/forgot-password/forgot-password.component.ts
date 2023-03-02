import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
    selector: 'app-forgot-password',
    templateUrl: './forgot-password.component.html',
    styleUrls: ['./forgot-password.component.css']
})

export class ForgotPasswordComponent implements OnInit {
    public email: string = '';

    public forgotPasswordForm: FormGroup;

    constructor(){}

    ngOnInit(): void{
        this.forgotPasswordForm = new FormGroup({
            fpEmail: new FormControl('', [Validators.required, Validators.email]),
        });
    }

    get forgotPasswordControls(){
        return this.forgotPasswordForm.controls['fpEmail'];
    }

    public submitForgotPassword(): void{
        const forgotPassword = { email: this.forgotPasswordForm.controls['fpEmail'].value}
        
    }
}