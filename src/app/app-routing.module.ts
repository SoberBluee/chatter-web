import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { AuthGuardService } from './shared/guards/auth-guard.service'

// Component imports
import { HomeComponent } from './home/home.component'
import { LoginComponent } from './login/login.component'
import { MessageComponent } from './message/message.component'
import { PeoplePageComponent } from './people-page/people-page.component'
import { NotFoundComponent } from './exceptions/404/404-not-found.component'
import { AccountComponent } from './account/account.component'
import { ResetPasswordComponent } from './reset-password/reset-password.component'

const routes: Routes = [
    //TODO: replace routes with routing component
    { path: 'login', component: LoginComponent, pathMatch: 'full' },
    {
        path: 'account',
        component: AccountComponent,
        pathMatch: 'full',
        canActivate: [AuthGuardService],
    },
    {
        path: 'message',
        component: MessageComponent,
        pathMatch: 'full',
        canActivate: [AuthGuardService],
    },
    {
        path: 'people-page',
        component: PeoplePageComponent,
        pathMatch: 'full',
        canActivate: [AuthGuardService],
    },
    {
        path: 'reset-password',
        component: ResetPasswordComponent,
        pathMatch: 'full',
        canActivate: [AuthGuardService],
    },
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full',
        canActivate: [AuthGuardService],
    },
    { path: '**', component: NotFoundComponent },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
