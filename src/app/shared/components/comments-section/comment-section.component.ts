import { Component, OnInit, Input } from '@angular/core';
import { Comment } from '../../interface.model';
import anime from 'animejs/lib/anime.es.js';
@Component({
    selector: 'app-comment-selction',
    templateUrl: './comment-section.component.html',
    styleUrls: ['./comment-section.component.scss'],
})
export class CommentSectionComponent implements OnInit {
    @Input() comments: Comment[];

    constructor() {}

    ngOnInit() {
        // ani  me({
        //     targets: 'comment bottom',
        //     translateX: 250,
        //     rotate: '1turn',
        //     backgroundColor: '#FFF',
        //     duration:d 800,
        // });
    }
}
