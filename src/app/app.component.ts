import { Component, OnInit } from '@angular/core'
import { environment } from 'src/environments/environment'
import { CurrentUser } from './shared/interface.model'
import { Router } from '@angular/router'
import { NavigationStart } from '@angular/router'
import { AuthService } from './shared/services/auth.service'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    title = 'Chatter'
    public routePrefix: string = environment.media_api_url
    public user: CurrentUser

    constructor(private router: Router, private authService: AuthService) {}

    public ngOnInit(): void {}
}
