import { Component, OnInit } from '@angular/core'
import { AuthService } from '../shared/services/auth.service'
import { CurrentUser } from '../shared/interface.model'
import { FormGroup, FormBuilder } from '@angular/forms'

@Component({
    selector: 'app-nav-menu',
    templateUrl: './nav-menu.component.html',
    styleUrls: ['./nav-menu.component.scss'],
})
export class NavMenuComponent implements OnInit {
    isExpanded = false
    public currentUser: CurrentUser | null

    public findFriendsForm: FormGroup
    public loginBtnText: string
    public headerOrientation: string = 'HORIZONTAL'
    public verticalHeader: boolean = false

    constructor(private authService: AuthService, private fb: FormBuilder) {}

    ngOnInit(): void {
        this.currentUser = JSON.parse(localStorage.getItem('session') ?? '')

        this.initForm()

        // this.findFriendsForm.controls.get('searchBar').valueChanges.subscribe(
        // (value) => {
        //     console.log(value);
        // });
    }

    private initForm(): void {
        this.findFriendsForm = this.fb.group({
            searchBar: [''],
        })
    }

    public changeHeaderOrientation(): void {
        this.verticalHeader = !this.verticalHeader
    }

    public get showLoginButton(): boolean {
        if (
            localStorage.getItem('session') &&
            localStorage.getItem('api_token')
        ) {
            return false
        }
        return true
    }

    /**
     * returns the search bar string value
     */
    public get searchBarValue(): string {
        return this.findFriendsForm.controls['searchBar'].value
    }

    collapse() {
        this.isExpanded = false
    }

    toggle() {
        this.isExpanded = !this.isExpanded
    }
}
