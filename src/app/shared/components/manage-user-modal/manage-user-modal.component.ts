import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { UserContacts, CurrentUser } from '../../interface.model';

@Component({
    selector: 'app-manage-user-modal',
    templateUrl: './manage-user-modal.component.html',
    styleUrls: ['./manage-user-modal.component.scss'],
})
export class ManageUserModalComponent implements OnInit {
    @Input() user: CurrentUser;
    @Input() user_contact_details: UserContacts;

    @Output() public unfriendEmitter = new EventEmitter<boolean>();
    @Output() public muteEmitter = new EventEmitter<boolean>();
    @Output() public blockUserEmitter = new EventEmitter<boolean>();
    @Output() public exitEmitter = new EventEmitter<boolean>();

    constructor() {}

    ngOnInit(): void {}

    public goToUserPage(): void {}

    public get name() {
        return (
            this.user.first_name.toUpperCase() +
            ' ' +
            this.user.sur_name.toUpperCase()
        );
    }

    public emitUnfriend(): void {
        this.unfriendEmitter.emit();
    }

    public emitMuteUser(): void {
        this.muteEmitter.emit();
    }

    public emitBlockUser(): void {
        this.blockUserEmitter.emit();
    }

    public emitExit(): void {
        this.exitEmitter.emit();
    }
}
