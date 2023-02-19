import { Injectable, OnInit } from "@angular/core";
import { Comment, Posts } from "../shared/interface.model";
import { Subject } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";
 
@Injectable({providedIn: 'root'})

export class PostSerice implements OnInit{
    public routePrefix: string = environment.media_api_url;

    public allComments: Comment[];
    public commentChange = new Subject<Comment>();
    public postLikeChange = new Subject<boolean>();
    public currentUserId: number;

    constructor(private http:HttpClient){}

    public ngOnInit(): void{
    }

    public setLike(liked:boolean, post_id: number): void{
    }

    public setComment(new_comment:Comment){
        this.allComments.push(new_comment);
        //Set comment
        this.commentChange.next(new_comment);
    }
    
    public getComments(comment_id: number){
        // //get Comments
        // const user_comments = this.allComments.filter((comment:Comment) => {
        //     return comment.id === comment_id;
        // })
        // return user_comments;
    }

    public getPost(post_id: number){
        return this.http.get("/posts/" + post_id);
    }

    public getAllPosts(){
        return this.http.get(this.routePrefix + '/posts/get-all-posts');
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