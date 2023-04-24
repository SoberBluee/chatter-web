import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { CurrentUser } from '../shared/interface.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-nav-menu',
    templateUrl: './nav-menu.component.html',
    styleUrls: ['./nav-menu.component.scss'],
})
export class NavMenuComponent implements OnInit {
    public currentUser: CurrentUser | null;

    public findFriendsForm: FormGroup;
    public loginBtnText: string;
    public headerOrientation: string = 'HORIZONTAL';
    public verticalHeader: boolean = false;
    public showSearch: boolean = false;

    constructor(
        private authService: AuthService,
        private fb: FormBuilder,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.verticalHeader =
            (localStorage.getItem('header-orientation') ?? null) === 'V'
                ? true
                : false;
        this.router.events.subscribe((val: any) => {
            if (localStorage.getItem('session') === null || undefined) {
                return;
            }

            if (this.router.url !== '/login') {
                this.currentUser = JSON.parse(
                    localStorage.getItem('session') ?? ''
                );
            }
            return;
        });
        this.initForm();
    }

    private initForm(): void {
        this.findFriendsForm = this.fb.group({
            searchBar: [''],
        });
    }

    public changeHeaderOrientation(): void {
        this.verticalHeader = !this.verticalHeader;
        if (this.verticalHeader) {
            localStorage.removeItem('header-orientation');
            localStorage.setItem('header-orientation', 'V');
            return;
        }
        localStorage.removeItem('header-orientation');
        localStorage.setItem('header-orientation', 'H');
        return;
    }

    public toggleSearch(): void {
        this.showSearch = !this.showSearch;
    }

    public get showLoginButton(): boolean {
        if (
            localStorage.getItem('session') &&
            localStorage.getItem('api_token')
        ) {
            return false;
        }
        return true;
    }

    /**
     * returns the search bar string value
     */
    public get searchBarValue(): string {
        return this.findFriendsForm.controls['searchBar'].value;
    }
}

export interface RouterObject {
    id: number;
    navigationTrigger: string;
    restoredState: any;
    url: string;
}
