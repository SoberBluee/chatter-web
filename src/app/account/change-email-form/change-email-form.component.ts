import { Component, OnInit, Input } from "@angular/core";
import { CurrentUser } from "src/app/shared/interface.model";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { EmailUpdate } from "src/app/shared/interface.model";
import { AccountService } from "../account.service";

@Component({
    selector: 'app-change-email-form',
    templateUrl: './change-email-form.component.html',
    styleUrls: ['./change-email-form.component.scss'],
})


export class ChangeEmailFormComponent implements OnInit{

    @Input() public currentUser: CurrentUser | null;

    public changeEmailForm: FormGroup;

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
            email: [this.currentUser?.email ? this.currentUser?.email : '', Validators.required],
            confirmEmail: ['', Validators.required],
        })
    }

    public submitEmailForm(): void{
        if(this.changeEmailForm.valid){ return; }

        const postData: EmailUpdate = {
            email: this.emailVal,
            confirmEmail: this.confirmEmailVal,
        }

        this.accountService.updateEmail(postData)
    }

    /**
     * Will check if a given, a string form control name, will return true or false
     * if that value is the same as before
     * @param string check 
     * @returns boolean
     */
     public get checkGreenChange(): boolean{
        return this.emailVal === this.currentUser?.email;
    }

    /**
     * Will check if a given, a string form control name, will return true or false
     * if that value has or has not been changed in the input field
     * @param string check 
     * @returns boolean
     */
    public get checkAmberChange(): boolean{
        return this.emailVal !== this.currentUser?.email && this.emailVal !== '';
    }
    
    /**
     * Will check if a given, a string form control name, will return true or false
     * if a value has been deleted
     * @param string check 
     * @returns boolean
     */
    public get checkRedChange(): boolean{
        return this.emailVal === '';
    }

    public get emailVal(): string { 
        return this.changeEmailForm.controls['email'].value;
    }

    public get confirmEmailVal(): string{ 
        return this.changeEmailForm.controls['confirmEmail'].value;
    }

}