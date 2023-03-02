import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { CurrentUser } from '../shared/interface.model';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
  isExpanded = false;
  public currentUser: CurrentUser;

  public findFriendsForm: FormGroup;

  constructor(private authService:AuthService, private fb: FormBuilder){}

  ngOnInit():void { 
    this.authService.emitCurrentUser.subscribe((user:CurrentUser) => {
        this.currentUser = user;
    });

    this.initForm();

    // this.findFriendsForm.controls.get('searchBar').valueChanges.subscribe(
    // (value) => {
    //     console.log(value);
    // });
  }

  private initForm(): void{ 
    this.findFriendsForm = this.fb.group({
        searchBar: [''],
    })
  }

  /**
   * returns the search bar string value
   */
  public get searchBarValue(): string{
    return this.findFriendsForm.controls['searchBar'].value;
  }

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
