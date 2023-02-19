import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { CurrentUser } from '../shared/interface.model';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
  isExpanded = false;
  public currentUser: CurrentUser;

  constructor(private authService:AuthService){}

  ngOnInit():void { 
    this.authService.emitCurrentUser.subscribe((user:CurrentUser) => {
        this.currentUser = user;
    });
  }

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
