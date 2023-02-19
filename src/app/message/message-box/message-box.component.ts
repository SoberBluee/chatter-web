import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/auth.service';
//RXJS
//Components
//Services 
import { MessageService } from '../message.service';
//Interfaces
import { MessageResponse, Message, CurrentUser, JsonResponse } from 'src/app/shared/interface.model';
import { Observer, PartialObserver } from 'rxjs';

@Component({
    selector: 'app-message-box',
    templateUrl: './message-box.component.html',
    styleUrls: ['./message-box.component.css']
})

export class MessageBoxComponent implements OnInit {
    // recieve selected user from sidebar
    @Input() selectedUser: CurrentUser; 

    public currentUser: CurrentUser;
    public messageForm: FormGroup;
    public selectedUserMessage: Message;
    public loading: boolean = false;
    public messageData: Message[] = [];

    // Hover over message related properties
    public toggleSettings: boolean = false;
    public messageHoverId: number;
    public toggleEdit: boolean = false;

    // manage message options
    public editMode: boolean = false; 
    public noUserSelectedError: string;

    constructor(private messageService: MessageService, 
                private authService: AuthService){}
    
    ngOnInit(): void{
        this.messageForm = new FormGroup({
            message: new FormControl('' , [Validators.required])
        });
        // get user from local storage
        this.currentUser = JSON.parse(localStorage.getItem('session') || '');

        // listen for when a user on the sidebar menu is selected
        this.messageService.emitSelectedUser
        .subscribe((selectedUser: CurrentUser) => {
            this.messageData = [];
            this.loading = true;
            // get message by the selectedUser id
            this.messageService.getMessages(this.currentUser.message_id, selectedUser.message_id)
                .subscribe((response: any) => {
                    if(!response ) {return}
                    console.log("response: ", response);
                    // work out sender after data returned from database
                    // Want to base the sender of the currently logged in user
                    this.findSender(response.data);
                    this.loading = false;
                })
    
        })
    }

    private findSender(message: Message[]): void{
        message.forEach((message) => {
            if(message.user_sender_id === this.currentUser.message_id) { message.isSender = true }
            else { message.isSender = false}
            this.messageData.push(message);
        })
    }

    public send():void {
        const message = this.messageForm.controls['message'].value;
        if(message === ''){
            return;
        }

        if(this.editMode){
            this.messageService.editMessage(this.selectedUser.message_id, this.messageHoverId, message);
            this.editMode = false;
            this.clearMessageBox();
            return;
        }

        const new_message = {
            sender: this.authService.currentUser?.id,
            reciever: this.selectedUser.id,
            message: message,
        };

        this.messageService.setMessage(new_message).subscribe((message: any)=>{
            this.messageData.push(message.data);
        });

        this.clearMessageBox();
    }

    /*
    * Sets hover and sets the index of the message with hover
    * @property: none
    * @return: void
    */    
    public hoverSettings(id: number): void{
        this.messageHoverId = id;
        this.toggleSettings = !this.toggleSettings;
    }

    /*
    * Toggles the edit message component on and off
    * @property: none
    * @return: void
    */
    public calltoggleEdit(): void{ this.toggleEdit = !this.toggleEdit; }

    /*
    * Will exit the message modal when exit button is pressed
    * @property: boolean
    * @return: void
    */
    public manageMessageExit(exit: boolean): void{ 
        this.toggleEdit = exit;
    }

    public manageMessageEdit(edit: boolean): void{ 
        this.editMode = edit; 
        const messageToEdit = this.findMessageToEdit(this.messageHoverId)
        this.messageForm.controls['message'].patchValue(messageToEdit.message)
    }

    public manageMessageDelete(deleteMsg: boolean): void{
        this.messageService.deleteMessage(this.messageHoverId)
    }

    public manageMessageForward(forward: boolean): void{}

    /*
    * Will clear the message box when message is sent
    * @property: none
    * @return: void
    */
    public clearMessageBox(): void{ this.messageForm.reset(); }

    private findMessageToEdit(message_id: number):any{
        // const messageToEdit = this.messageData.messages.filter((message) =>{
        //     return message.id === this.messageHoverId;
        // })
        // return messageToEdit[0];
    }

    /*
    * Checks which message the user is hovering over
    * @property: number
    * @return: boolean
    */
    public hoverCheck(id: number): boolean{ return this.toggleSettings && id === this.messageHoverId ? true : false }

}