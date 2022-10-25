import { Component, OnInit, Input } from "@angular/core";

//Interfaces
import { User } from "../../interface.model";

@Component({
    selector: 'app-sidebar-user',
    templateUrl: './sidebar-user.component.html',
    styleUrls: ['./sidebar-user.component.css'],
})

export class SideBarUserComponent implements OnInit{
    // make as table
    @Input() user: User;

    public profile_picture: string;
    public status: string;

    constructor(){}
    
    ngOnInit(): void {
        this.user.lastOnline.getUTCDate();

        if(this.user.status === 'ACTIVE'){
            this.status = 'assets/active-user.png'
        }
        else if(this.user.status === 'INACTIVE'){
            this.status = 'assets/inactive-user.png';
        }
        else if(this.user.status === 'AFK'){
            this.status = 'assets/afk-user.png'
        }
    }
}