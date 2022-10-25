import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register/register.component';
import { AccountComponent } from './account/account.component';
import { MessageComponent} from './message/message.component';
import { PeoplePageComponent } from './people-page/people-page.component';
import { AuthGuardService } from './login/auth-guard.service';
import { ForgotPasswordComponent } from './login/forgot-password/forgot-password.component';
import { PostItemComponent } from './home/post-item/post-item.component'
import { SideBarUserComponent } from './shared/components/sidebar-user/sidebar-user.component';
import { MessageBoxComponent } from './message/message-box/message-box.component';
import { ManageUserModalComponent } from './shared/components/manage-user-modal/manage-user-modal.component';
import { ManageMessageModalComponent } from './shared/components/manage-message-modal/manage-message-modal.component';
// import {MatDialogModule} from '@angular/material/dialog';
import { ErrorBannerComponent } from './shared/components/error-banner/error-banner.component';


//Error Exceptions
import { NotFoundComponent } from './Exceptions/404/404-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    LoginComponent,
    ForgotPasswordComponent,
    RegisterComponent,
    AccountComponent,
    MessageComponent,
    PeoplePageComponent,
    PostItemComponent,
    SideBarUserComponent,
    MessageBoxComponent,
    ManageUserModalComponent,
    ManageMessageModalComponent,
    ErrorBannerComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    // MatDialogModule,
    RouterModule.forRoot([
       //TODO: replace routes with routing component
      { path: '', component: HomeComponent, pathMatch: 'full', canActivate: [AuthGuardService] },
      { path: 'login', component: LoginComponent, pathMatch: 'full' },
      { path: 'account', component: AccountComponent, pathMatch: 'full', canActivate: [AuthGuardService] },
      { path: 'message', component: MessageComponent, pathMatch: 'full', canActivate: [AuthGuardService] },
      { path: 'people-page', component: PeoplePageComponent, pathMatch: 'full', canActivate: [AuthGuardService] },
      { path: '**', component: NotFoundComponent}

    ])
  ],
  providers: [
    // {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
