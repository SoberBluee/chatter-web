import { Component, OnInit } from '@angular/core'

@Component({
    selector: 'app-search-bar',
    templateUrl: './search-bar.component.html',
    styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
    constructor() {}

    public ngOnInit(): void {}
}

//create form for the input
//when the user starts typing in input box, listen for a valueChanged event
// send request with string to endpoint to fetch friend
// use string to search subsctrings in the database, return the list of friends that matches the string
