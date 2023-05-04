import { Component, OnInit, Input } from '@angular/core';
import { Comment, CurrentUser } from '../../interface.model';
import anime from 'animejs/lib/anime.es.js';

@Component({
    selector: 'app-comment-selction',
    templateUrl: './comment-section.component.html',
    styleUrls: ['./comment-section.component.scss'],
})
export class CommentSectionComponent implements OnInit {
    @Input() public currentUser: CurrentUser | null;
    @Input() comments: Comment[];

    constructor() {}

    ngOnInit() {
        console.log('currentUser: ', this.currentUser);
        // ani  me({
        //     targets: 'comment bottom',
        //     translateX: 250,
        //     rotate: '1turn',
        //     backgroundColor: '#FFF',
        //     duration:d 800,
        // });
    }

    public deleteComment(commentId: number): void {
        console.log(this.comments);
        this.comments.forEach((comment: Comment, index: number) => {
            if (comment.id === commentId) {
                this.comments.splice(index, 1);
            }
        });
        console.log(this.comments);
    }

    public canAlterComment(commentIndex: number): boolean {
        console.log(this.comments[commentIndex]);
        return this.comments[commentIndex].userId === this.currentUser?.id;
    }
}
