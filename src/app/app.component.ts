import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CurrentUser } from './shared/interface.model';
import { Router } from '@angular/router';
import { NavigationStart } from '@angular/router';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'Chatter';
  public routePrefix: string = environment.media_api_url;
  public user: CurrentUser;

  constructor(
        private router:Router,
        private authService: AuthService){}

  public ngOnInit(): void{
    this.router.events.subscribe((event:any) =>{
        // if(event instanceof NavigationStart){
        //     console.log('navigationStart');
        //     let user = localStorage.getItem('session') ?? null;
        //     if(user){
        //         this.authService.autoLogin(JSON.parse(user)).subscribe({
        //             next: (response:any) => {
        //                 if(response.data){
        //                     this.router.navigate(['/']);
        //                 }
        //             }
        //         });
        //     }

        // }
    })
  }

}
