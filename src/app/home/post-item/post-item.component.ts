import {Component, OnInit, Input} from '@angular/core'

@Component({
    selector: 'app-post-item',
    templateUrl: './post-item.component.html',
    styleUrls: ['./post-item.component.css']
})

export class PostItemComponent implements OnInit {

    @Input() public title: string;
    @Input() public uploadDate: string;
    // @Input() public img: string;
    @Input() public content: string;
    @Input() public comments: string[];

    

    public showComment: boolean = false;

    constructor(){}

    ngOnInit(): void {
        
    }

    public like(): void{
        console.log('Like post');
    }

    public comment():void{
        console.log('Post comment');
    }   

    public share():void{
        console.log("Share post")
    }



}
