import { Component, OnInit, Input } from '@angular/core';
import { User, UserContacts } from '../../interface.model';


@Component({
    selector: 'app-manage-user-modal',
    templateUrl: './manage-user-modal.component.html',
    styleUrls: ['./manage-user-modal.component.css']
})

export class ManageUserModalComponent implements OnInit {

    @Input() user: User;
    @Input() user_contact_details: UserContacts;

    constructor() {}

    ngOnInit(): void{}

    public get name(){
        return this.user.firstname.toUpperCase() + " " + this.user.surname.toUpperCase();
    }

}