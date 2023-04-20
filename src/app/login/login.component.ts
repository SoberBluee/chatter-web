import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../shared/services/auth.service';
import { Router } from '@angular/router';
import { Login } from './auth-properties';
import { CurrentUser } from '../shared/interface.model';
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
    // Error banner stuff
    public isError: boolean = false;
    public errorBannerMessage: string;
    public errorStatusCode: number;

    //Form related sutff
    public user: CurrentUser;
    public submitted: boolean = false;
    public loginForm: FormGroup;
    public showRegisterForm: boolean = false;
    public showForgotPasswordForm: boolean = false;

    public loading: boolean = false;

    constructor(public authService: AuthService, public router: Router) {}

    public ngOnInit(): void {
        this.loginForm = new FormGroup({
            email: new FormControl('', [Validators.required, Validators.email]),
            password: new FormControl('', [
                Validators.required,
                Validators.min(6),
            ]),
        });
    }

    public get loginControls() {
        return this.loginForm.controls;
    }

    public get passwordLength(): number {
        const passLen = this.loginForm.controls['password'].value.length;
        if (passLen !== 0) {
            return passLen;
        }
        return -1;
    }

    public clear() {
        //TODO: implement
        this.loginForm.reset();
    }

    public switchRegister(): void {
        this.showRegisterForm = false;
        this.showForgotPasswordForm = !this.showForgotPasswordForm;
    }

    public switchForgotPassword(): void {
        this.showForgotPasswordForm = false;
        this.showRegisterForm = !this.showRegisterForm;
    }

    public submitLogin(): void {
        this.submitted = true;
        this.loading = true;

        const login: Login = {
            email: this.loginForm.controls['email'].value,
            password: this.loginForm.controls['password'].value,
        };

        this.authService
            .login(login)
            .pipe()
            .subscribe({
                next: (response: any) => {
                    if (response.status === 200) {
                        localStorage.setItem(
                            'session',
                            JSON.stringify(response.data)
                        );
                        localStorage.setItem(
                            'api_token',
                            JSON.stringify(response.data.api_token)
                        );
                        this.authService.setCurrentUser(response.data);
                        this.loading = false;
                        this.router.navigate(['/']);
                    } else {
                        console.error('ERROR:', response);
                        this.isError = true;
                        this.errorBannerMessage = response.message;
                        this.errorStatusCode = response.status;
                        return;
                    }
                },
            });
        this.submitted = false;
    }
}
