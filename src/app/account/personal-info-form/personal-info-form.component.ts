import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
    selector: 'app-personal-info-form',
    templateUrl: './personal-info-form.component.html',
    styleUrls: ['./personal-info-form.component.scss']
})

export class PersonalInfoFormComponent implements OnInit {

    public personalInfoForm: FormGroup;

    public constructor(private fb:FormBuilder){ }

    public ngOnInit(): void {
        this.initForm();
    }

    private initForm(): void{ 
        this.personalInfoForm = this.fb.group({
            username: [''],
            firstname: [''],
            surname: [''],
            email: [''],
            phonenumber: [''],
        })
    }


    public submitPersonalForm(): void{ 

    }

}
