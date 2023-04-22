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

    ngOnInit() {
        this.comments = [
            {
                id: 1,
                comment:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nunc diam, volutpat non gravida non, dignissim non mauris. Nulla sed mollis orci. In sit amet lacus tincidunt, tristique eros vitae, consequat risus. Sed porta nisl ante. Ut volutpat viverra enim nec efficitur. Nullam at tristique ex. Aliquam tempor, lacus a tincidunt convallis, eros magna mollis risus, et venenatis massa tortor at justo. Praesent rutrum mauris nec diam convallis pellentesque. Aliquam gravida, enim a dignissim blandit, ante enim euismod diam, at malesuada nunc ipsum ut dui. Nam accumsan faucibus facilisis. ',
            },
            {
                id: 1,
                comment:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nunc diam, volutpat non gravida non, dignissim non mauris. Nulla sed mollis orci. In sit amet lacus tincidunt, tristique eros vitae, consequat risus. Sed porta nisl ante. Ut volutpat viverra enim nec efficitur. Nullam at tristique ex. Aliquam tempor, lacus a tincidun',
            },
        ];
    }
}
