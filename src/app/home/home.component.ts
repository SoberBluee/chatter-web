import { Component, OnInit } from '@angular/core';
import { User, Posts } from '../shared/interface.model';
import { MessageService } from '../message/message.service';
import { DummyData } from '../shared/dummyData';
import { PostSerice } from './post.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    public users: User[] =[]
    public posts: Posts[];
    public selectedUser: User;
    public toggleCreateNewPost: boolean = false;
    
    constructor(private messageService: MessageService, private postService: PostSerice, private dummyData: DummyData){}

    ngOnInit(){
        this.users = this.dummyData.getUsers();
        this.posts  = this.dummyData.getPosts();
    }

    public setSelectedUser(index: number): void{
        this.selectedUser = this.users[index];
        this.messageService.emitSelectedUser.next(this.selectedUser);
        this.postService.currentUserId = this.selectedUser.id
    }

    public toggleNewPost(): void{
        this.toggleCreateNewPost = !this.toggleCreateNewPost;
    }
}
