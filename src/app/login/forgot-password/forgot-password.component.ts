import { Component, OnInit } from '@angular/core';
import {
    FormGroup,
    FormControl,
    Validators,
    FormBuilder,
} from '@angular/forms';
import { EmailServiceComponent } from 'src/app/shared/services/email.service';
import { ErrorBannerComponent } from 'src/app/shared/services/error-banner/error-banner.component';

@Component({
    selector: 'app-forgot-password',
    templateUrl: './forgot-password.component.html',
    styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {
    public email: string = '';

    public forgotPasswordForm: FormGroup;

    constructor(
        private emailService: EmailServiceComponent,
        private fb: FormBuilder
    ) {}

    ngOnInit(): void {
        this.forgotPasswordForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
        });
    }

    public get forgotPasswordControls() {
        return this.forgotPasswordForm.controls['email'];
    }

    public submitForgotPassword(): void {
        const email = this.forgotPasswordForm.controls['email'].value;
        this.emailService
            .resetPassword(email)
            .pipe()
            .subscribe({
                next: (response) => {
                    console.log('Response: ', response);
                },
                error: (error) => {
                    console.error(error);
                },
            });
    }
}
