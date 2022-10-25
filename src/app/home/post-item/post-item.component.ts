import {Component, OnInit, Input} from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-post-item',
    templateUrl: './post-item.component.html',
    styleUrls: ['./post-item.component.css']
})

export class PostItemComponent implements OnInit {

    public postOptionsForm: FormGroup;
    @Input() public title: string;
    @Input() public uploadDate: string;
    @Input() public img: string;
    @Input() public content: string;
    @Input() public comments: string[];
    @Input() public likes: number = 0;
    
    // TODO: make this input when like system is setup
    public isLiked: boolean = false;
    public showComment: boolean = false;
    public toggleCommentSection: boolean = false;

    constructor(){}

    ngOnInit(): void {
        this.postOptionsForm = new FormGroup({
            commentBox: new FormControl(''),
        });
    }

    public like(): void{
        this.isLiked = !this.isLiked;
    }

    public comment():void{
        const comment = this.postOptionsForm.get('commentBox')?.value;
        console.log("comment: ", comment);
    }   

    public share():void{
        console.log("Share post")
    }

    public showComments(): void{
        this.toggleCommentSection = !this.toggleCommentSection
    }
}
