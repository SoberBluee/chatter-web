import { Component, OnInit } from '@angular/core';
import { CurrentUser, Posts } from '../shared/interface.model';
import { MessageService } from '../shared/services/message.service';
import { PostSerice } from '../shared/services/post.service';
import { UserService } from '../shared/services/user.service'
import { AuthService } from '../shared/services/auth.service';

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.css']
})

export class PostComponent implements OnInit{
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
            this.friends_list = user.friend_list;
            this.userService.hasFriendsEvent.next(user.friend_list);
        });

    }

    public toggleNewPost(): void{
        this.toggleCreateNewPost = !this.toggleCreateNewPost;
    }

}