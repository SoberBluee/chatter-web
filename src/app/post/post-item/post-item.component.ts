import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Comment } from 'src/app/shared/interface.model';
import { PostSerice } from 'src/app/shared/services/post.service';

@Component({
    selector: 'app-post-item',
    templateUrl: './post-item.component.html',
    styleUrls: ['./post-item.component.scss'],
})
export class PostItemComponent implements OnInit {
    @Input() public postId: number;
    @Input() public comments: Comment[];
    @Input() public title: string | undefined;
    @Input() public uploadDate: string;
    @Input() public img: string | undefined;
    @Input() public content: string | undefined;
    @Input() public likes: number = 0;

    public postOptionsForm: FormGroup;

    public isLiked: boolean = false;
    public showComment: boolean = false;
    public toggleCommentSection: boolean = false;
    public toggleCommentBox: boolean = false;

    constructor(private postService: PostSerice) {}

    ngOnInit(): void {
        this.postOptionsForm = new FormGroup({
            commentBox: new FormControl(''),
        });
    }

    public like(): void {
        this.isLiked = !this.isLiked;
    }

    public comment(): void {
        const comment = this.postOptionsForm.get('commentBox')?.value;
        this.postService.setComment(comment, this.postId);
        this.clearComments();
    }

    public clearComments(): void {
        this.postOptionsForm.reset();
    }

    public share(): void {
        console.log('Share post');
    }

    public showCommentBox(): void {
        this.toggleCommentBox = !this.toggleCommentBox;
    }

    public showComments(): void {
        this.toggleCommentSection = !this.toggleCommentSection;
    }
}
