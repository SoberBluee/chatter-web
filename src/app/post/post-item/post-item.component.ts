import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Comment } from 'src/app/shared/interface.model';
// import { PostSerice } from '../post.service';

@Component({
    selector: 'app-post-item',
    templateUrl: './post-item.component.html',
    styleUrls: ['./post-item.component.scss'],
})
export class PostItemComponent implements OnInit {
    @Input() public post_id: number;
    @Input() public comment_id: number;
    @Input() public title: string;
    @Input() public uploadDate: string;
    @Input() public img: string;
    @Input() public content: string;
    @Input() public likes: number = 0;

    public postOptionsForm: FormGroup;
    public comments: Comment[];

    // TODO: make this input when like system is setup
    public isLiked: boolean = false;
    public showComment: boolean = false;
    public toggleCommentSection: boolean = false;
    public toggleCommentBox: boolean = false;

    constructor() {}

    ngOnInit(): void {
        // get comments for a certain post when inialised
        // this.comments = this.postService.getComments(this.comment_id);
        // Initialise comment box
        this.postOptionsForm = new FormGroup({
            commentBox: new FormControl(''),
        });
        //listen for comments change
        // this.postService.commentChange.pipe().subscribe({
        //     next: (updated_comments:Comment)=>{
        //         this.comments.push(updated_comments)
        //     }
        // })
    }

    public like(): void {
        this.isLiked = !this.isLiked;
        //need proper user account to save likes to account;
        // this.postService.setLike(this.isLiked, this.post_id);
    }

    public comment(): void {
        const comment = this.postOptionsForm.get('commentBox')?.value;
        const new_comment: Comment = { id: this.comment_id, comment };
        // this.postService.setComment(new_comment);
        this.clearComments();
    }

    public clearComments(): void {
        this.postOptionsForm.reset();
    }

    public share(): void {
        // console.log("Share post");
    }

    public showCommentBox(): void {
        this.toggleCommentBox = !this.toggleCommentBox;
    }

    public showComments(): void {
        this.toggleCommentSection = !this.toggleCommentSection;
    }
}
