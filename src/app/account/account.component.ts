import { Component, OnInit, OnChanges } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { UpdatedUser } from "../login/auth-properties";

import { Register} from '../login/auth-properties';

@Component({
    selector: 'app-account',
    templateUrl: './account.component.html',
    styleUrls: ['./account.component.css']
})

export class AccountComponent implements OnInit {

    public dummyData: Register = {
        user_name: 'tempUser',
        firstname: 'something',
        surname: 'something else',
        phone_number: '09999999',
        email:'something@mail.com',
        password: ''
    }

    public accountForm = new FormGroup({
        firstname: new FormControl(this.dummyData.firstname ? this.dummyData.firstname : '', { updateOn: 'blur' }),
        surname: new FormControl(this.dummyData.surname ? this.dummyData.surname : '', { updateOn: 'blur' }),
        phonenumber: new FormControl(this.checkFormNumber() ? this.dummyData.phone_number : '', { updateOn: 'blur' }),
        email: new FormControl(this.dummyData.email ? this.dummyData.email : '', { updateOn: 'blur' }),
        oldPassword: new FormControl('', Validators.min(6)),
        password: new FormControl('', [Validators.min(6)]),
        confirmPassword: new FormControl('', Validators.min(6)),
    });

    constructor(){}

    ngOnInit(): void {
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

    public checkFormNumber():boolean{
        return !!this.dummyData.phone_number ? true : false;
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
}
