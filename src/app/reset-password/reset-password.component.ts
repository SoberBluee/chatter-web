import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";


@Component({
    selector: 'app-reset-password',
    templateUrl: './reset-password.component.html',
    styleUrls: ['./reset-password.component.scss'],
    
})

export class ResetPasswordComponent implements OnInit{

    public resetPasswordForm: FormGroup;
    public email: string;
    public token: string;

    public constructor(
        private readonly fb: FormBuilder, 
        private readonly route: ActivatedRoute
    ){}
    
    public ngOnInit(): void{
        this.initForm();
        this.route.params.subscribe((params) => {
            if(params.email){
                console.log("params: ", params.email);
            }
        })
    }

    private initForm(): void{ 
        this.resetPasswordForm = this.fb.group({
            oldPassword: ['', [Validators.required]],
            newPassword: ['', [Validators.required, Validators.minLength(6)]],
            confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
        })
    }

    public submitPasswordReset(): void{ 

    }
}