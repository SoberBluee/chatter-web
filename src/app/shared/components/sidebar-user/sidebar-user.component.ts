import { Component, OnInit, Input, ChangeDetectorRef } from "@angular/core";
import { AuthService } from "../../auth.service";
import { MessageService } from "src/app/message/message.service";
import { Router } from "@angular/router";
//Interfaces
import { CurrentUser } from "../../interface.model";

@Component({
    selector: 'app-sidebar-user',
    templateUrl: './sidebar-user.component.html',
    styleUrls: ['./sidebar-user.component.css'],
})

export class SideBarUserComponent implements OnInit{
    // make as table
    @Input() user: CurrentUser;
    
    public currentUser: CurrentUser;
    public profile_picture: string;
    public status: string;
    public selectedUser: CurrentUser;

    constructor(private authService:AuthService, 
                private cd: ChangeDetectorRef, 
                private messageService: MessageService,
                private router: Router){}
    
    ngOnInit(): void {
        this.currentUser = JSON.parse(localStorage.getItem('session') || '');
        this.currentUser.lastOnline;

        if(this.currentUser.status === 'ACTIVE'){
            this.status = 'assets/active-user.png'
        }
        else if(this.currentUser.status === 'INACTIVE'){
            this.status = 'assets/inactive-user.png';
        }
        else if(this.currentUser.status === 'AFK'){
            this.status = 'assets/afk-user.png'
        }
    }

    public setSelectedUser(selectedUserIndex: number): void{
        this.selectedUser = this.currentUser.friend_list[selectedUserIndex];
        this.messageService.emitSelectedUser.next(this.selectedUser);
        this.router.navigate(['message']);
    }
}