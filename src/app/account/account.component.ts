import { Component, OnInit } from "@angular/core";
import { AuthService } from "../shared/auth.service";
import { CurrentUser } from "../shared/interface.model";

@Component({
    selector: 'app-account',
    templateUrl: './account.component.html',
    styleUrls: ['./account.component.scss']
})

export class AccountComponent implements OnInit {
    public currentUser: CurrentUser | null; 

    public constructor(private readonly authService: AuthService){}

    public ngOnInit(): void{
        this.currentUser = this.authService.currentUser ?? null;
        if(!this.currentUser){
            console.error('Current user does not exist');
        }
    }
}