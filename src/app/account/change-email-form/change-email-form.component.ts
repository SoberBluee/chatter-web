import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { CurrentUser } from "src/app/shared/interface.model";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { EmailUpdate, ApiResponse, ErrorBannerEvent } from "src/app/shared/interface.model";
import { AccountService } from "../../shared/services/account.service";

@Component({
    selector: 'app-change-email-form',
    templateUrl: './change-email-form.component.html',
    styleUrls: ['./change-email-form.component.scss'],
})


export class ChangeEmailFormComponent implements OnInit{

    @Input() public currentUser: CurrentUser | null;

    public changeEmailForm: FormGroup;

    @Output() public emitBannerMessage:EventEmitter<ErrorBannerEvent> = new EventEmitter();

    constructor(
        private readonly fb: FormBuilder, 
        private readonly accountService: AccountService){}

    public ngOnInit(): void{ 
        if(!this.currentUser){
            console.error('No User');
        }
        this.initForm();
    }

    private initForm(): void{ 
        this.changeEmailForm = this.fb.group({
            email: ['', Validators.required],
            confirmEmail: ['', Validators.required],
        })
    }

    public submitEmailForm(): void{
        if(this.changeEmailForm.valid){ return; }

        const postData: EmailUpdate = {
            userId: this.currentUser?.id ?? -1,
            email: this.emailVal,
            confirmEmail: this.confirmEmailVal,
        }

        this.accountService
            .updateEmail(postData)
            .pipe()
            .subscribe({
                next: (response:any) => {
                    if(response.status === 200){
                        //update current user in local storage
                        localStorage.setItem('session', JSON.stringify(response.data));
                        //emit success message
                        this.emitBannerMessage.emit({
                            status: response.status,
                            message: response.message,
                            type: 'SUCCESS'
                        });
                        
                        window.scrollTo(0,0);
                    }
                    this.emitBannerMessage.emit({
                        status: response.status,
                        message: response.message,
                        type: 'ERROR'
                    })
                    window.scrollTo(0,0);

                },
                error: (response: any) =>{
                    this.emitBannerMessage.emit({
                        status: 400,
                        message: 'Something went wrong',
                        type: 'ERROR'
                    })
                    window.scrollTo(0,0);
                }
            })
    }

    public get checkEmail(): boolean{
        return this.emailVal === this.confirmEmailVal;
    }

    public get emailVal(): string { 
        return this.changeEmailForm.controls['email'].value;
    }

    public get confirmEmailVal(): string{ 
        return this.changeEmailForm.controls['confirmEmail'].value;
    }

}