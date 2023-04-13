import { Component, OnInit, Output, EventEmitter } from '@angular/core'

@Component({
    selector: 'app-page-navigation',
    templateUrl: './page-navigation.component.html',
    styleUrls: ['./page-navigation.component.scss'],
})
export class PageNavigationComopnent implements OnInit {
    @Output() public pageChangeEmitter = new EventEmitter<number>()

    constructor() {}

    public ngOnInit(): void {}

    public changePage(page: number): void {
        console.log('changePage:', page)
        this.pageChangeEmitter.emit(page)
    }
}
