import { Component, OnInit, Output, EventEmitter } from '@angular/core'

@Component({
    selector: 'app-page-navigation',
    templateUrl: './page-navigation.component.html',
    styleUrls: ['./page-navigation.component.scss'],
})
export class PageNavigationComopnent implements OnInit {
    @Output() public pageChangeEmitter = new EventEmitter<number>()
    @Output() public logoutEmitter = new EventEmitter<void>()

    constructor() {}

    public ngOnInit(): void {}

    public changePage(page: number): void {
        this.pageChangeEmitter.emit(page)
    }

    public emitLogout(): void {
        this.logoutEmitter.emit()
    }
}
