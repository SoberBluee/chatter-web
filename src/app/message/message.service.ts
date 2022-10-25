import { MessageContent, User, Message } from "../shared/interface.model";
import { Injectable } from "@angular/core";
import { DummyData } from "../shared/dummyData";

/* RXJS */
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})

export class MessageService{

    /*
    * TODO: REPLACE ALL CRUD FUNCTIONS WITH BACKEND CALLS
    */
    public users: User[]= [];
    public messagesChange = new Subject<Message>(); //emites a new message 
    public messageHistory: MessageContent[]; //Message History
    public emitSelectedUser = new Subject<User>();

    constructor(private dummyData: DummyData){
        this.messageHistory = this.dummyData.getMessages();
    }

    private autoGenerateId(user_message_id: number){
        let biggestId: number = 0;

        this.messageHistory.forEach((message, index) => {
            if(message.messages[index].id > biggestId){
                biggestId = message.messages[index].id;
            }
        })
        return biggestId++;
    }

    /* pass in the user id to get messages from backend */
    public getMessages(): MessageContent[]{
        return this.messageHistory.slice();
    }

    public setMessage(message:Message){
        //set to 0 because you're onluy sending one message at a time
        if(message.id === -1){
            message.id = this.autoGenerateId(message.id);
        }
        this.messagesChange.next(message);
    }

    public deleteMessage(user_message_id: number, message_id: number): boolean{
        console.log("before delete: ", this.messageHistory);
        this.messageHistory.forEach((user_messages:MessageContent, user_index) => {
            if(user_messages.user_message_id === user_message_id){
                user_messages.messages.forEach((message:Message, message_index) =>{
                    if(message.id === message_id){
                        this.messageHistory[user_index].messages.splice(message_index, 1);
                    }
                })
            }
        })
        
        return true;
    }

    public getMessabyByUser(message_id: number){
        const message =  this.messageHistory.filter((message)=>{
            return message.user_message_id === message_id;
        })
        return message[0];
    }

    public editMessage(user_id: number, message_id: number, newMessage: string){

        const new_message:Message = {
            id: message_id,
            message: newMessage,
            isSender: true,
            timestamp: +new Date(),
            sender: 'ethan',    
            reciever: 'unknown',
        }

        this.messageHistory.forEach((user_message:MessageContent) => {
            if(user_message.user_message_id === user_id){ 
                user_message.messages.forEach((message: Message, index: number) => {
                    if(message.id === message_id){
                        user_message.messages[index] = new_message
                    }
                })
            }
        });
    }
}