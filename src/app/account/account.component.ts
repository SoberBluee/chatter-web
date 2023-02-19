import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { UpdatedUser } from "../login/auth-properties";
import { AuthService } from "../shared/auth.service";
import { CurrentUser } from "../shared/interface.model";
import { AccountServiceComponent } from "../shared/services/account.service";

@Component({
    selector: 'app-account',
    templateUrl: './account.component.html',
    styleUrls: ['./account.component.css']
})

export class AccountComponent implements OnInit {
    public currentUser: CurrentUser;
    public accountForm = new FormGroup({
        username: new FormControl('', {updateOn: 'blur'}),
        firstname: new FormControl('', { updateOn: 'blur' }),
        surname: new FormControl('', { updateOn: 'blur' }),
        phonenumber: new FormControl('', { updateOn: 'blur' }),
        email: new FormControl('', { updateOn: 'blur' }),
    });

    public changePasswordForm = new FormGroup({
        oldPassword: new FormControl('', Validators.min(6)),
        password: new FormControl('', [Validators.min(6)]),
        confirmPassword: new FormControl('', Validators.min(6)),
    });
    
    constructor(private authService: AuthService, 
                private accountService: AccountServiceComponent){}

    ngOnInit(): void {
        this.currentUser = JSON.parse(localStorage.getItem('session') || '');

        this.accountForm.patchValue({
            username: this.currentUser.user_name,
            firstname: this.currentUser.first_name,
            surname: this.currentUser.sur_name,
            phonenumber : this.currentUser.phone_number,
        });
        
        this.accountForm.valueChanges.subscribe({
            next:((changes)=>{
                console.log(changes);
            })
        })
    }

    public get comparePassword(): boolean{
        return this.accountForm.controls['password'].value === 
        this.accountForm.controls['confirmPassword'].value ? true : false;
    }

    public get passwordEmpty(): boolean{
        return this.accountForm.controls['password'].value.length === 0;
    }

    public checkTouched(controlName: string): boolean{
        return this.accountForm.controls[controlName].touched;
    }

    public updateAccount(): void { 
        const updatedData:UpdatedUser = {
            firstname: this.accountForm.controls['firstname'].value,
            surname: this.accountForm.controls['surname'].value,
            phoneNumber: this.accountForm.controls['phoneNumber'].value,
            email: this.accountForm.controls['email'].value,
            password: this.accountForm.controls['password'].value,
        }
        console.log("accountForm: ", updatedData);
    }

    public changePassword(): void{
        const oldPassword = this.changePasswordForm.controls['oldPassword'].value
        this.accountService.checkOldPassword(this.currentUser.id, oldPassword).subscribe((response) => {
            console.log('reponse: ', response);
        })
    }
}
