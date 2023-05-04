import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Comment } from 'src/app/shared/interface.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostSerice } from 'src/app/shared/services/post.service';

@Component({
    selector: 'app-comment',
    templateUrl: './comment.component.html',
    styleUrls: ['./comment.component.scss'],
})
export class CommentComponent implements OnInit {
    @Input() public comment: Comment;
    @Input() public canUserEdit: boolean;
    @Input() public canUserDelete: boolean;

    public trashClicked: boolean = false;
    public commentClicked: boolean = false;
    public likeClicked: boolean = false;
    public editClicked: boolean = false;
    public formErrors: boolean = false;
    public commentControlHover: boolean = false;
    public openTrashCommentModel: boolean = false;
    public deleteModelDisplayText: string =
        'Are you sure you want to delete this comment ?';
    public editCommentForm: FormGroup;

    @Output() public deleteCommentFromParent: EventEmitter<number> =
        new EventEmitter<number>();

    constructor(private fb: FormBuilder, private postService: PostSerice) {}

    public ngOnInit(): void {
        this.initForm();
    }

    private initForm(): void {
        this.editCommentForm = this.fb.group({
            newComment: [this.comment.comment ?? '', [Validators.required]],
        });
    }

    public editCommentSubmit(): void {
        /**
         * Check if comment for is valid
         */
        const newComment = this.editCommentForm.get('newComment')?.value;
        this.postService.editComment(newComment, this.comment.id).subscribe({
            next: (response: any) => {
                console.log(response);
                this.editClicked = false;
                this.commentControlHover = false;
                this.comment = response.data;
            },
            error: (error: any) => {
                console.log(error);
            },
            complete: () => {},
        });
    }

    public deleteComment(): void {
        this.postService.deleteComment(this.comment.id).subscribe({
            next: (response: any) => {
                console.log('response: ', response);
                this.deleteCommentFromParent.emit(this.comment.id);
                this.openTrashCommentModel = false;
            },
        });
    }

    public toggleTrash() {
        this.trashClicked = !this.trashClicked;
        this.openTrashCommentModel = true;
    }

    public toggleComments() {
        this.commentClicked = !this.commentClicked;
    }

    public checkOpenControl(): void {
        if (this.editClicked || this.trashClicked) {
            this.commentControlHover = true;
            return;
        }
        this.commentControlHover = false;
        return;
    }

    public toggleEdit() {
        if (this.editClicked) {
            this.commentControlHover = false;
            this.editClicked = false;
        } else {
            this.editClicked = true;
            this.commentControlHover = true;
        }

        this.editCommentForm.patchValue({
            newComment: this.comment.comment,
        });
    }
}
