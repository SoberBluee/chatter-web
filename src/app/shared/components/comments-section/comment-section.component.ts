import { Component, OnInit, Input } from '@angular/core';
import { Comment } from '../../interface.model';
@Component({
    selector: 'app-comment-selction',
    templateUrl: './comment-section.component.html',
    styleUrls: ['./comment-section.component.scss'],
})
export class CommentSectionComponent implements OnInit {
    @Input() comments: Comment[];

    constructor() {}

    ngOnInit() {}
}
