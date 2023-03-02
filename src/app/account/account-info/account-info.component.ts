import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import { CurrentUser } from 'src/app/shared/interface.model';

@Component({
    selector: 'app-account-info',
    templateUrl: './account-info.component.html',
    styleUrls: ['./account-info.component.scss']
})


export class AccountInfoComponent implements OnInit {

    @Input() public currentUser: CurrentUser;

    constructor(){}

    public ngOnInit(): void{ 
    }

}