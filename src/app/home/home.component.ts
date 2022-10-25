import { Component, OnInit } from '@angular/core';
import { User, Posts } from '../shared/interface.model';
import { MessageService } from '../message/message.service';
import { DummyData } from '../shared/dummyData';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    public users: User[] =[]
    public posts: Posts[];
    public selectedUser: User;
    

    constructor(private messageService: MessageService, private dummyData: DummyData){}

    ngOnInit(){
        this.users = this.dummyData.getUsers();
        this.posts  = this.dummyData.getPosts();
        console.log("posts: ", this.posts);
    }

    public setSelectedUser(index: number): void{
        this.selectedUser = this.users[index];
        this.messageService.emitSelectedUser.next(this.selectedUser);
    }



}
