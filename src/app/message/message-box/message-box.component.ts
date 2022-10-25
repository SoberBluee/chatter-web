import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MessageContent } from 'src/app/shared/interface.model';
import { DummyData } from 'src/app/shared/dummyData';
//RXJS
//Components
//Services 
import { MessageService } from '../message.service';
//Interfaces
import { User, Message } from 'src/app/shared/interface.model';

@Component({
    selector: 'app-message-box',
    templateUrl: './message-box.component.html',
    styleUrls: ['./message-box.component.css']
})

export class MessageBoxComponent implements OnInit {
    // recieve selected user from sidebar
    @Input() selectedUser: User; 
    public messageForm:FormGroup;
    public messageData: MessageContent;
    public toggleEdit: boolean = false;
    // Hover over message related properties
    public toggleSettings: boolean = false;
    public messageHoverId: number;
    // manage message options
    public editMode: boolean = false; 

    public noUserSelectedError: string;


    constructor(private messageService: MessageService, private dummyData: DummyData){}
    
    ngOnInit(): void{
        this.messageForm = new FormGroup({
            message: new FormControl('' , [Validators.required])
        });

        //gets the selected user to display messages for that user
        this.messageService.emitSelectedUser.pipe().subscribe((user) => {
            this.selectedUser = user;
            this.messageData = this.messageService.getMessabyByUser(this.selectedUser.messages_id);
        });
        //Will update data when new message is stored
        this.messageService.messagesChange.subscribe({
            next: (message: Message) => {
                // this.messageData.messages.push(message);
                this.dummyData.setMessage(this.selectedUser.messages_id, message);
            } 
        });
    }

    public send():void {
        const message = this.messageForm.controls['message'].value;
        if(message === ''){
            return;
        }

        //on send
        // edit message before sending to service 
        // send edited message to service
        // update message in message data history 
        // return updated list and clear old messages
        if(this.editMode){
            this.messageService.editMessage(this.selectedUser.messages_id, this.messageHoverId, message);
            this.editMode = false;
            this.clearMessageBox();
            return;
        }

        const new_message: Message = {
            id: -1,
            isSender: true,
            message,
            timestamp: +Date.now(),
            sender: 'ethan',
            reciever: 'dave',
        };
        this.messageService.setMessage(new_message);
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
        this.messageService.deleteMessage(this.selectedUser.messages_id, this.messageHoverId)
    }

    public manageMessageForward(forward: boolean): void{}

    /*
    * Will clear the message box when message is sent
    * @property: none
    * @return: void
    */
    public clearMessageBox(): void{ this.messageForm.reset(); }

    private findMessageToEdit(message_id: number):Message{
        const messageToEdit = this.messageData.messages.filter((message) =>{
            return message.id === this.messageHoverId;
        })
        return messageToEdit[0];
    }

    /*
    * Checks which message the user is hovering over
    * @property: number
    * @return: boolean
    */
    public hoverCheck(id: number): boolean{ return this.toggleSettings && id === this.messageHoverId ? true : false }

}