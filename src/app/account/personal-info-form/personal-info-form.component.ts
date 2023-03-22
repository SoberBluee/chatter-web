import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormBuilder } from '@angular/forms';
import { CurrentUser, ErrorBannerEvent } from "src/app/shared/interface.model";
import { AccountService } from "../../shared/services/account.service";

@Component({
    selector: 'app-personal-info-form',
    templateUrl: './personal-info-form.component.html',
    styleUrls: ['./personal-info-form.component.scss']
})

export class PersonalInfoFormComponent implements OnInit {
    
    @Input() public currentUser: CurrentUser | null;

    public personalInfoForm: FormGroup;

    @Output() public emitBannerMessage: EventEmitter<ErrorBannerEvent> = new EventEmitter();


    public constructor(private fb:FormBuilder, private accountService: AccountService){ }

    public ngOnInit(): void {
        this.initForm();
    }

    /**
     * Initalize all form fields 
     * @returns void
     */
    private initForm(): void{ 
        this.personalInfoForm = this.fb.group({
            username: [this.currentUser?.user_name ? this.currentUser.user_name : ''],
            firstname: [this.currentUser?.first_name ? this.currentUser.first_name : ''],
            surname: [this.currentUser?.sur_name ? this.currentUser.sur_name : ''],
            phonenumber: [this.currentUser?.phonenumber ? this.currentUser.phonenumber : ''],
        })
    }

    /**
     * When the user submits the personal info form
     * @returns void
     */
    public submitPersonalForm(): void{ 
        if(!this.personalInfoForm.valid){
            return;
        }

        const postData = {
            userId: this.currentUser?.id,
            username: this.checkAmberChange('username') ? this.usernameVal : null,
            firstname: this.checkAmberChange('firstname') ? this.firstnameVal : null,
            surname: this.checkAmberChange('surname') ? this.surnameVal : null,
            phonenumber: this.checkAmberChange('phonenumber') ? this.phonenumberVal.toString() : null,
        };

        this.accountService
            .updateAccountDetails(postData)
            .subscribe((response: any) => {
                if(response.status === 200){
                    this.emitBannerMessage.emit({
                        status: response.status,
                        message: response.message,
                        type: 'SUCCESS',
                    })
                }
                this.emitBannerMessage.emit({
                    status: response.status,
                    message: response.message,
                    type: 'ERROR',
                })
            })
    }
    
    /**
     * Will check if a given, a string form control name, will return true or false
     * if that value is the same as before
     * @param string check 
     * @returns boolean
     */
    public checkGreenChange(check: string): boolean{
        switch(check){
            case 'username':
                return this.usernameVal === this.currentUser?.user_name;
            case 'firstname':
                return this.firstnameVal === this.currentUser?.first_name;
            case 'surname':
                return this.surnameVal === this.currentUser?.sur_name;
            case 'phonenumber':     
                return this.phonenumberVal === this.currentUser?.phonenumber;
            default:
                return false;
        }
    }
    /**
     * Will check if a given, a string form control name, will return true or false
     * if that value has or has not been changed in the input field
     * @param string check 
     * @returns boolean
     */
    public checkAmberChange(check: string): boolean{
        switch(check){
            case 'username':
                return this.usernameVal !== this.currentUser?.user_name && this.usernameVal !== '';
            case 'firstname':
                return this.firstnameVal !== this.currentUser?.first_name && this.firstnameVal !== '';
            case 'surname':
                return this.surnameVal !== this.currentUser?.sur_name && this.surnameVal !== '';
            case 'phonenumber':     
                return this.phonenumberVal !== this.currentUser?.phonenumber && this.phonenumberVal !== '';
            default:
                return false;
        }
    }
    /**
     * Will check if a given, a string form control name, will return true or false
     * if a value has been deleted
     * @param string check 
     * @returns boolean
     */
    public checkRedChange(check: string): boolean{
        switch(check){
            case 'username':
                return this.usernameVal === '';
            case 'firstname':
                return this.firstnameVal === '';
            case 'surname':
                return this.surnameVal === '';
            case 'phonenumber':     
                return this.phonenumberVal === '';
            default:
                return false;
        }
    }

    /**
     * Returns username form control value
     */
    public get usernameVal(): string{
        return this.personalInfoForm.controls['username'].value;
    }
    
    /**
    * Returns firstname form control value
    */
    public get firstnameVal():string{
        return this.personalInfoForm.controls['firstname'].value;
    }
    
    /**
    * Returns surname form control value
    */
    public get surnameVal(): string{
        return this.personalInfoForm.controls['surname'].value;
    }

    /**
    * Returns phonenumber form control value
    */
    public get phonenumberVal(): string{
        return this.personalInfoForm.controls['phonenumber'].value;
    }
}
