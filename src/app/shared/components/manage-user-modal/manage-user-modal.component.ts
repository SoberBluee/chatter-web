import { Component, OnInit, Input } from '@angular/core';
import { UserContacts, CurrentUser } from '../../interface.model';


@Component({
    selector: 'app-manage-user-modal',
    templateUrl: './manage-user-modal.component.html',
    styleUrls: ['./manage-user-modal.component.css']
})

export class ManageUserModalComponent implements OnInit {

    @Input() user: CurrentUser;
    @Input() user_contact_details: UserContacts;

    constructor() {}

    ngOnInit(): void{
        console.log('selectedUser manage user modal: ', this.user);
    }

    public goToUserPage(): void{
        
    }

    public get name(){
        return this.user.first_name.toUpperCase() + " " + this.user.sur_name.toUpperCase();
    }

}