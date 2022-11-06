import { Injectable, OnInit } from "@angular/core";
import { Comment, Posts } from "../shared/interface.model";
import { Subject } from "rxjs";
import { DummyData } from "../shared/dummyData";
import { HttpClient } from "@angular/common/http";
 
@Injectable({providedIn: 'root'})

export class PostSerice implements OnInit{
    public routePrefix: string = 'http://127.0.0.1:8000/api/v1';

    public allComments: Comment[];
    public commentChange = new Subject<Comment>();
    public postLikeChange = new Subject<boolean>();
    public currentUserId: number;

    constructor(private dummyData: DummyData, private http:HttpClient){}

    public ngOnInit(): void{
    }

    public setLike(liked:boolean, post_id: number): void{
        this.dummyData.setLike(liked, post_id);
    }

    public setComment(new_comment:Comment){
        this.allComments.push(new_comment);
        this.dummyData.updateComments(this.allComments);
        this.commentChange.next(new_comment);
    }
    
    public getComments(comment_id: number): Comment[]{
        this.allComments = this.dummyData.getComments()
        const user_comments = this.allComments.filter((comment:Comment) => {
            return comment.id === comment_id;
        })
        return user_comments;
    }

    public getPost(post_id: number){
        return this.http.get(this.routePrefix + "/posts/" + post_id);
    }

    public setPosts(new_post: Posts){
        return this.http.post(this.routePrefix + "/posts/create-post", new_post);
    }

    public deletePosts(post_id: number){
        return this.http.delete(this.routePrefix + "/posts/"+post_id);
    }

    public editPosts(){

    }
}