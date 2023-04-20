import { Component, OnInit, Output } from '@angular/core';
import { MessageService } from '../shared/services/message.service';
import { AuthService } from '../shared/services/auth.service';
import { Subject } from 'rxjs';

//Interfaces
import { CurrentUser } from '../shared/interface.model';

@Component({
    selector: 'app-message',
    templateUrl: './message.component.html',
    styleUrls: ['./message.component.scss'],
})
export class MessageComponent implements OnInit {
    public currentUser: CurrentUser | null;
    public selectedUser: CurrentUser;
    public userHeaderName: string = 'No user selected';
    public toggleManageUser: boolean = false;
    //Error Banner
    public showErrorBanner: boolean = false;
    public errorBannerMessage: string;
    public errorBannerType: string;

    constructor(
        private authService: AuthService,
        private messageService: MessageService
    ) {}

    ngOnInit() {
        this.currentUser = JSON.parse(localStorage.getItem('session') || '');
        this.messageService.emitSelectedUser.subscribe((selectedUser) => {
            console.log('emitSelectedUser: ', selectedUser);
            this.selectedUser = selectedUser;
        });
    }

    public closeError() {
        this.showErrorBanner = false;
    }

    public toggleManagerUserModel(event: any): void {
        this.toggleManageUser = event;
    }
}
