import { Component, OnInit, Input } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { CurrentUser } from "src/app/shared/interface.model";
import { AccountService } from "../account.service";
import { AuthService } from "src/app/shared/auth.service";

@Component({
    selector: 'app-password-info-form',
    templateUrl: './password-info-form.component.html',
    styleUrls: ['./password-info-form.component.scss']
})

export class PasswordInfoFormComponent implements OnInit {

    public passwordInfoForm: FormGroup;

    @Input() public currentUser: CurrentUser | null;
    public passwordMismatch: boolean = false;
    public wrongCurrentPassword: boolean = false;

    public constructor(
        private fb: FormBuilder,
        private accountService: AccountService,
        private authService: AuthService) {}

    public ngOnInit(): void{
        
        this.initForm();
    }

    private initForm(): void{ 
        this.passwordInfoForm = this.fb.group({
            currentPassword: [''],
            password: [''],
            confirmPassword: [''],
        })
    }

    public submitPasswordForm(): void{ 
        if(this.passwordMismatch || this.currentUser === null){ return; }

        console.log("passwordMismatch: ", this.passwordMismatch);

        const checkPassData = { 
            oldPassword: this.oldPasswordVal,
            id: this.currentUser.id,
        };

        this.accountService
            .checkOldPassword(checkPassData)
            .subscribe((result: any) => {
                if(result.data){
                    return;
                }
                this.wrongCurrentPassword = true;
                return; 
            });

        const postData = { 
            password: this.passwordVal, 
            id: this.currentUser.id
        }

        console.log(this.currentUser);
        this.accountService
            .updatePassword(postData)
            .subscribe((response:any) => {

            });
    }

    public get checkPasswordMatch(): boolean {
        (this.passwordVal !== this.confirmPasswordVal) ? this.passwordMismatch = true : this.passwordMismatch = false;
        return this.passwordMismatch;
    }

    public get passwordVal(): string{
        return this.passwordInfoForm.controls['password'].value;
    }

    public get confirmPasswordVal(): string{
        return this.passwordInfoForm.controls['confirmPassword'].value;
    }   

    public get oldPasswordVal(): string{
        return this.passwordInfoForm.controls['currentPassword'].value;
    }

}