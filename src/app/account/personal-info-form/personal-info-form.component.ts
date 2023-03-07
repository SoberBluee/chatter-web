import { Component, OnInit, Input } from "@angular/core";
import { FormGroup, FormBuilder } from '@angular/forms';
import { CurrentUser } from "src/app/shared/interface.model";
import { AccountService } from "../account.service";

@Component({
    selector: 'app-personal-info-form',
    templateUrl: './personal-info-form.component.html',
    styleUrls: ['./personal-info-form.component.scss']
})

export class PersonalInfoFormComponent implements OnInit {

    public personalInfoForm: FormGroup;

    @Input() public currentUser: CurrentUser | null;

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

        const newData = {
            username: this.checkAmberChange('username') ? this.usernameVal : '',
            firstname: this.checkAmberChange('firstname') ? this.firstnameVal : '',
            surname: this.checkAmberChange('surname') ? this.surnameVal : '' ,
            phonenumber: this.checkAmberChange('phonenumber') ? this.phonenumberVal.toString() : '',
        };
        
        this.accountService
            .updateAccountDetails(newData)
            .subscribe((response: any) => {
                console.log(response);
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
