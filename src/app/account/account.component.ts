import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { CurrentUser, ErrorBannerEvent } from '../shared/interface.model';

@Component({
    selector: 'app-account',
    templateUrl: './account.component.html',
    styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {
    public currentUser: CurrentUser | null;
    public showBanner: boolean = false;
    public accountCurrentPage: number = 2;
    public accountNextPage: number = -1;

    public error_message: string;
    public error_type: string;
    public error_status: number;

    public constructor(private readonly authService: AuthService) {}

    public ngOnInit(): void {
        this.currentUser = JSON.parse(localStorage.getItem('session') ?? '');
        if (!this.currentUser) {
            console.error('Current user does not exist');
        }
    }

    public showBannerMessage($event: ErrorBannerEvent) {
        this.error_message = $event.message;
        this.error_type = $event.type;
        this.error_status = $event.status;
        this.showBanner = true;
    }

    public accountPageChange(nextPage: number): void {
        this.accountCurrentPage = nextPage;
    }

    public logoutUser(): void {
        localStorage.removeItem('api_token');
        localStorage.removeItem('session');
        window.location.reload();
    }
}
