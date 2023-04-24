import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Post, CreatePost } from 'src/app/shared/interface.model';
import { PostSerice } from '../../shared/services/post.service';

@Component({
    selector: 'app-create-post',
    templateUrl: './create-post.component.html',
    styleUrls: ['./create-post.component.scss'],
})
export class CreatePostComponent implements OnInit {
    public createNewPostForm: FormGroup;

    constructor(private postService: PostSerice) {}

    ngOnInit(): void {
        this.createNewPostForm = new FormGroup({
            title: new FormControl(''),
            body: new FormControl(''),
            img: new FormControl(''),
        });
    }

    public createNewPost() {
        const new_post: CreatePost = {
            title: this.createNewPostForm.get('title')?.value,
            body: this.createNewPostForm.get('body')?.value,
            img: '',
        };

        this.postService
            .setPosts(new_post)
            .pipe()
            .subscribe((post) => {
                console.log('response: ', post);
            });
    }

    public clearPost(): void {
        this.createNewPostForm.reset;
    }
}
