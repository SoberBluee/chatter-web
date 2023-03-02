import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { CurrentUser, Error } from 'src/app/shared/interface.model';
import { MessageService } from '../message.service';

@Component({
    selector: 'app-message-box-header',
    templateUrl: './message-box-header.component.html',
    styleUrls: ['./message-box-header.component.css'],
})

export class MessageBoxHeaderComponent implements OnInit{

    @Input() public selectedUser: CurrentUser;
    @Output() public emitToggleManagerUser: EventEmitter<boolean> = new EventEmitter();

    public showError: boolean = false;
    public toggleManageUser: boolean = false;

    constructor(private messageService: MessageService){}

    public ngOnInit(): void{
        // listen for when selected user is pressed
        this.messageService.emitSelectedUser.subscribe((selectedUser: CurrentUser) => {
            this.selectedUser = selectedUser;
        });
    }

    public showManageUserModal(){
        if(!this.selectedUser){
            
        }else{
            this.toggleManageUser = !this.toggleManageUser;
            this.emitToggleManagerUser.emit(this.toggleManageUser);
        }
    }
}