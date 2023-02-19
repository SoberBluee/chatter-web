import { Component, OnInit } from '@angular/core';
import { Posts, CurrentUser } from '../shared/interface.model';
import { MessageService } from '../message/message.service';
import { PostSerice } from './post.service';
import { UserService } from '../shared/user.service'
import { AuthService } from '../shared/auth.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
    public currentUser: CurrentUser;
    public friends_list: any;
    public posts: Posts[];
    public selectedUser: CurrentUser;
    public toggleCreateNewPost: boolean = false;
    public test: string = "test1";
    
    constructor(private messageService: MessageService, 
                private postService: PostSerice, 
                private userService:UserService,
                private authService:AuthService,
                ){}

    ngOnInit(){
        this.authService.emitCurrentUser.subscribe((user:CurrentUser) => {
            this.currentUser = user;
            console.log("home component: ", this.currentUser);
            this.friends_list = user.friend_list;
            this.userService.hasFriendsEvent.next(user.friend_list);
        });

        // this.postService.getAllPosts().subscribe((allPosts:any) => {
        //     this.posts = allPosts.data;
        // })
    }

    public toggleNewPost(): void{
        this.toggleCreateNewPost = !this.toggleCreateNewPost;
        console.log("newPost: ", this.toggleCreateNewPost);
    }
}
