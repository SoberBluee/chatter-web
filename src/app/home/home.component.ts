import { Component, OnInit } from '@angular/core';
import { Post } from './post-properties.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    constructor(){}

    public defaultPosts: Post[] = [
        {id: 1, title:'something', uploadDate: 'DD/MM/YYYY', img: 'something',userId: 554, content: 'some content', comments: ['some comment', 'another comments'] },
        {id: 2, title:'post 2', uploadDate: 'DD/MM/YYYY', img: 'something', userId: 223, content: 'some post 2 content', comments: ['some comment', 'another comments'] },
        {id: 3, title:'another post', uploadDate: 'DD/MM/YYYY', img: 'something', userId: 441, content: 'another post conetent', comments: ['some comment', 'another comments'] },
        {id: 4, title:'some other post', uploadDate: 'DD/MM/YYYY', img: 'something', userId: 111, content: 'some more post content ', comments: ['some comment', 'another comments'] },
    ]

    ngOnInit(): void{}



}
