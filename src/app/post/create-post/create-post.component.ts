import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { Posts } from "src/app/shared/interface.model";
import { PostSerice } from "../../shared/services/post.service";

@Component({
    selector: 'app-create-post',
    templateUrl: './create-post.component.html',
    styleUrls: ['./create-post.component.css']
})

export class CreatePostComponent implements OnInit{

    public newCreatePost: FormGroup;

    constructor(private postService: PostSerice){}

    ngOnInit(): void {
        this.newCreatePost = new FormGroup({
            title: new FormControl(''),
            body:new FormControl(''),
            img: new FormControl(''),
        });
    }

    public createNewPost(){
        const new_post:Posts = {
            title: this.newCreatePost.get('title')?.value,
            body: this.newCreatePost.get('body')?.value,
            img: '',
        }

        this.postService.setPosts(new_post).pipe().subscribe((post) => {
            console.log("response: ", post );
        })
    }
}