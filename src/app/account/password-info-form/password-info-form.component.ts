import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { CurrentUser, ErrorBannerEvent } from "src/app/shared/interface.model";
import { AccountService } from "../account.service";
import { AuthService } from "src/app/shared/auth.service";

@Component({
    selector: 'app-password-info-form',
    templateUrl: './password-info-form.component.html',
    styleUrls: ['./password-info-form.component.scss']
})

export class PasswordInfoFormComponent implements OnInit {

    @Input() public currentUser: CurrentUser | null;
    
    public passwordInfoForm: FormGroup;
    public passwordMismatch: boolean = false;
    public wrongCurrentPassword: boolean = false;

    @Output() public emitBannerMessage: EventEmitter<ErrorBannerEvent> = new EventEmitter();

    public constructor(
        private fb: FormBuilder,
        private accountService: AccountService,
        private authService: AuthService) {}

    public ngOnInit(): void{
        this.initForm();
    }

    /**
     * Initialize change password form
     * @returns void
     */
    private initForm(): void{ 
        this.passwordInfoForm = this.fb.group({
            currentPassword: [''],
            password: [''],
            confirmPassword: [''],
        })
    }

    /**
     * Updates user password
     * @returns void
     */
    private updatePassword(): void{
        if(this.currentUser === null){
            return;
        }
        const postData = { 
            password: this.passwordVal, 
            id: this.currentUser.id
        }

        this.accountService
            .updatePassword(postData)
            .subscribe({
                next: (response:any) => {
                    if(response.status === 200) {
                        this.emitBannerMessage.emit({
                            status: response.status,
                            message: response.message,
                            type: "SUCCESS"
                        })
                    }
                    this.emitBannerMessage.emit({
                        status: response.status,
                        message: response.message,
                        type: 'ERROR'
                    });
                    window.scrollTo(0,0)
                }
            });
    }

    /**
     * Will first check users old password against inputted password then will change password
     * @returns void
     */
    public submitPasswordForm(): void{ 
        if(this.passwordMismatch || this.currentUser === null){ return; }

        const checkPassData = { 
            oldPassword: this.oldPasswordVal,
            id: this.currentUser.id,
        };
        
       this.accountService
        .checkOldPassword(checkPassData)
        .subscribe((response: any) => {
            if(response.data){
                this.updatePassword();
                return;
            }          
            this.passwordMismatch = true;
            this.emitBannerMessage.emit({
                status: response.status,
                message: response.message,
                type: "ERROR "
            })
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