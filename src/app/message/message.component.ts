import { Component, OnInit, Injectable} from "@angular/core";
import { DummyData } from "../shared/dummyData";
import { MessageService } from "./message.service";

//Interfaces 
import {User} from '../shared/interface.model';

@Component({
    selector: 'app-message',
    templateUrl: './message.component.html',
    styleUrls: ['./message.component.css']
})

export class MessageComponent implements OnInit{
    public users: User[] =[]
    public selectedUser: User;
    public userHeaderName: string = 'No user selected';
    public toggleManageUser: boolean = false;    
    //Error Banner
    public showErrorBanner: boolean = false;
    public errorBannerMessage: string;
    public errorBannerType: string;

    constructor(private messageService: MessageService, private dummyData: DummyData){}

    ngOnInit(){
        this.users = this.dummyData.getUsers();
    }

    public showManageUserModal(){
        if(!this.selectedUser){
            this.showErrorBanner = true;
            this.errorBannerMessage = 'You have not selected a user.';
            this.errorBannerType = 'ERROR';
        }else{
            this.toggleManageUser = !this.toggleManageUser
        }
    }

    public setSelectedUser(index: number): void{
        this.selectedUser = this.users[index];
        this.userHeaderName = this.selectedUser.username;
        this.messageService.emitSelectedUser.next(this.selectedUser);
    }

    public closeError(){this.showErrorBanner = false;}

}