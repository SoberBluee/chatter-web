import { User, MessageContent, Message, UserContacts, Posts } from "./interface.model"
import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})

export class DummyData{

    public messages: MessageContent[] = [
        {
            user_message_id:43, 
            messages: [ 
                {id:1, message: 'Hello Ethan', isSender: false, timestamp: 1665422209, sender: 'John', reciever: 'ethan'}, //sender and recieer could be id instead
                {id:2, message: 'Hello John', isSender: true, timestamp: 1665422209, sender: 'Ethan', reciever: 'John'}, 
                {id:3, message: 'Hows the weather today ?', isSender: false, timestamp: 1665422209, sender: 'John', reciever: 'ethan'}, 
                {id:4, message: 'Not bad!', isSender: true, timestamp: 1665422209, sender: 'Ethan', reciever: 'John'}, 
            ]
        },
        {
            user_message_id:12, 
            messages: [ 
                {id:1, message: 'Wow!', isSender: true, timestamp: 1665422209, sender: 'someruser', reciever: 'ethan'}, //sender and recieer could be id instead
                {id:2, message: 'Nice drinks', isSender: true, timestamp: 1665422209, sender: 'someuser', reciever: 'ethan'}, 
                {id:3, message: 'thanks!', isSender: false, timestamp: 1665422209, sender: 'ethan', reciever: 'someuser'}, 
                {id:4, message: 'What are you drinking ? ', isSender: false, timestamp: 1665422209, sender: 'ethan', reciever: 'someuser'}, 
            ]
        }
    ]

    public users: User[]=[
        {id: 1, 
            messages_id:43 ,
            contact_id:2,
            posts_id: 22,
            username: "someuser", 
            firstname: 'some', 
            surname: 'user', 
            _session_token: 'kjh123hkh888hhb9',
            _token_expiration: new Date('2022-12-23') ,
            addedUsers: [2,3],
            status: 'INACTIVE', 
            lastOnline: new Date('2022-12-23'),
         },
         {id: 2, 
            messages_id: 12, 
            contact_id: 3,
            posts_id: 23,
            username: "dave", 
            firstname: 'dave', 
            surname: 'dave',
            _session_token: 'kjh123hkh888hhb9',
            _token_expiration: new Date('2022-12-23') ,
            addedUsers: [1,4],
            status: 'ACTIVE', 
            lastOnline: new Date('2022-12-23'),
         },
         {id: 3, 
            messages_id: 99 ,
            contact_id: 4,
            posts_id: 24,
            username: "john", 
            firstname: 'john', 
            surname: 'user',
            _session_token: 'kjh123hkh888hhb9',
            _token_expiration: new Date('2022-12-23') ,
            addedUsers: [2,3],
            status: 'AFK', 
            lastOnline: new Date('2022-12-23'),
         },
         {id: 4, 
            messages_id: 55, 
            contact_id: 5,
            posts_id: 25,
            username: "paul", 
            firstname: 'paul', 
            surname: 'user',
            _session_token: 'kjh123hkh888hhb9',
            _token_expiration: new Date('2022-12-23') ,
            addedUsers: [2,3],
            status: 'INACTIVE', 
            lastOnline: new Date('2022-12-23'),
         },
         {
            id: 5, 
            messages_id: 70, 
            contact_id: 6,
            posts_id: 26,
            username: "danial", 
            firstname: 'danial', 
            surname: 'user',
            _session_token: 'kjh123hkh888hhb9',
            _token_expiration: new Date('2022-12-23') ,
            addedUsers: [2,3],
            status: 'ACTIVE', 
            lastOnline: new Date('2022-12-23'),
      },
    ];

    public userContacts:UserContacts[] =[
        {id: 2, email: 'someuser@mail.com', phone_number: '077888999', address:{
            house_number:55,
            street_address: 'something',
            post_code: 'NP££££££',
            country: 'wales',
        }},
        {id: 3, email: 'dave@mail.com', phone_number: '077888999', address:{
            house_number:55,
            street_address: 'something',
            post_code: 'NP££££££',
            country: 'wales',
        }},
        {id: 4, email: 'john@mail.com', phone_number: '07777777',address:{
            house_number:55,
            street_address: 'something',
            post_code: 'NP££££££',
            country: 'wales',
        }},
        {id: 5, email: 'paul@mail.com', phone_number:'07444444',address:{
            house_number:55,
            street_address: 'something',
            post_code: 'NP££££££',
            country: 'wales',
        }},
        {id: 6, email: 'danial@mail.com', phone_number:'07999888',address:{
            house_number:55,
            street_address: 'something',
            post_code: 'NP££££££',
            country: 'wales',
        }}
    ]

    public posts: Posts[] = [
        {id: 22, title: 'A new post', body:'something below the title to fill it', comment_id: 1, likes:0},
        {id: 22, title: 'Another test post', img:'assets/mountain.jpeg', body:'another something body lkjsdlfkj;alksdf asdfl;aj asd falsdkf ', comment_id: 1, likes:0}
    ]

    public getUsers(): User[]{
        return this.users.slice();
    }

    public getPosts(): Posts[]{
        return this.posts.slice();
    }

    public getMessages(): MessageContent[]{
        return this.messages.slice();
    }

    public setMessage(user_message_id: number, new_message: Message){
        this.messages.forEach((message: MessageContent) => {
            if(message.user_message_id === user_message_id){
                message.messages.push(new_message);
            }
        })
    }

    public getMessagesForUser(message_id: number){
        const user_messages =  this.messages.filter((message) => {
            return message.user_message_id === message_id ? message.messages : null
        });
        return user_messages[0].messages;
    }
}