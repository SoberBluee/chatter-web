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
            this.selectedUser = selectedUser;
            // get message by the selectedUser id
            this.messageService.getMessages(this.currentUser.message_id, selectedUser.message_id)
                .subscribe((response: any) => {
                    if(!response ) {return}
                    console.log("response: ", response);
                    // work out sender after data returned from database
                    // Want to base the sender of the currently logged in user
                    this.findSenderAndReciever(response.data);
                    this.loading = false;
                })
    
        })
    }

    /**
     * Will set the sender boolean to tell sender and reciever apart from server
     * @param message[] 
     * @returns void
     */
    private findSenderAndReciever(message: Message[]): void{
        this.messageData = [];
        message.forEach((message) => {
            if(message.user_sender_id === this.currentUser.message_id) { message.isSender = true }
            else { message.isSender = false}
            this.messageData.push(message);
        })
    }

    /**
     * will send or edit a message and send the new data to the server
     * 
     * @params none
     * @returns void
     */
    public send():void {
        const message = this.getMessage;
        if(message === ''){
            return;
        }
        // check if the user wants to edit the message
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
        // set message locally
        this.messageService
            .setMessage(new_message)
            .subscribe((message: any)=>{// return the latest message from the server
                this.findSenderAndReciever(message.data);// find sender and reciever
            });

        this.clearMessageBox();
    }

    public get getMessage(): string{
        return this.messageForm.controls['message'].value;
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
        if(!message_id){ return; }
        // filter the message to edit and retreieve the first message 
        return this.messageData.filter((message) => {
            return message.id === message_id;
        })[0];
    }

    /*
    * Checks which message the user is hovering over
    * @property: number
    * @return: boolean
    */
    public hoverCheck(id: number): boolean{ return this.toggleSettings && id === this.messageHoverId ? true : false }

}