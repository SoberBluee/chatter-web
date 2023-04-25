import { Component, OnInit, Input } from '@angular/core';
import { Comment } from 'src/app/shared/interface.model';

@Component({
    selector: 'app-comment',
    templateUrl: './comment.component.html',
    styleUrls: ['./comment.component.scss'],
})
export class CommentComponent implements OnInit {
    @Input() public comment: Comment;

    public trashClicked: boolean = false;
    public commentClicked: boolean = false;
    public likeClicked: boolean = false;
    public editClicked: boolean = false;

    constructor() {}

    public ngOnInit(): void {}

    public toggleTrash() {
        this.trashClicked = !this.trashClicked;
    }

    public toggleComments() {
        this.commentClicked = !this.commentClicked;
    }

    public toggleEdit() {
        this.editClicked = !this.editClicked;
    }
}
