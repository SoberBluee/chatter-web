import { Component, OnInit, Input } from '@angular/core';
import { Comment } from '../../interface.model';
@Component({
    selector: 'app-comment-selction',
    templateUrl: './comment-section.component.html',
    styleUrls: ['./comment-section.component.css']
})

export class CommentSectionComponent implements OnInit{

    @Input() comments: Comment[];

    constructor(){}

    ngOnInit(){
        console.log(this.comments);
    }



}