import { Component, OnInit } from '@angular/core';
import { CurrentUser, Post } from '../shared/interface.model';
import { MessageService } from '../shared/services/message.service';
import { PostSerice } from '../shared/services/post.service';
import { UserService } from '../shared/services/user.service';
import { AuthService } from '../shared/services/auth.service';

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
    public currentUser: CurrentUser | null;
    public posts: Post[];
    public selectedUser: CurrentUser;
    public toggleCreateNewPost: boolean = false;

    constructor(
        private messageService: MessageService,
        private postService: PostSerice,
        private userService: UserService,
        private authService: AuthService
    ) {}

    ngOnInit() {
        this.currentUser =
            localStorage.getItem('session') ?? null
                ? JSON.parse(localStorage.getItem('session') ?? '')
                : null;

        this.postService.getAllPosts().subscribe((response: any) => {
            this.posts = response.data;
            console.log('Post with comments: ', this.posts);
        });
    }

    public checkCommentsForPost(post: Post, index: number): void {}

    public toggleNewPost(): void {
        this.toggleCreateNewPost = !this.toggleCreateNewPost;
    }
}
