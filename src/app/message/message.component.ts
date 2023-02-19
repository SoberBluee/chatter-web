import { Component, OnInit} from "@angular/core";
import { MessageService } from "./message.service";
import { AuthService } from "../shared/auth.service";

//Interfaces 
import {CurrentUser} from '../shared/interface.model';

@Component({
    selector: 'app-message',
    templateUrl: './message.component.html',
    styleUrls: ['./message.component.css']
})

export class MessageComponent implements OnInit{
    public users: CurrentUser[] =[]
    public selectedUser: CurrentUser;
    public userHeaderName: string = 'No user selected';
    public toggleManageUser: boolean = false;    
    //Error Banner
    public showErrorBanner: boolean = false;
    public errorBannerMessage: string;
    public errorBannerType: string;

    constructor(private authService: AuthService, private messageService: MessageService){}

    ngOnInit(){
        // const user = this.authService.currentUser || null;
        // if(user){
        //     console.log('selected user in message component');
        //     this.messageService.getMessages(user.message_id, this.selectedUser.message_id)
        //     .subscribe((response: any) => {
        //         console.log("get messages : ", response);
        //     });
        // }
    } 

    public closeError(){this.showErrorBanner = false;}

}