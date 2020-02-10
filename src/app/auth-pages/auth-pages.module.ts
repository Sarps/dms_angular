import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ComingSoonPageComponent} from './coming-soon/coming-soon-page.component';
import {ErrorPageComponent} from './error/error-page.component';
import {ForgotPasswordPageComponent} from './forgot-password/forgot-password-page.component';
import {LockScreenPageComponent} from './lock-screen/lock-screen-page.component';
import {LoginPageComponent} from './login/login-page.component';
import {MaintenancePageComponent} from './maintenance/maintenance-page.component';
import {RegisterPageComponent} from './register/register-page.component';
import {FormsModule} from '@angular/forms';
import {PipesModule} from '../shared/pipes/pipes.module';
import {AuthPagesRoutingModule} from './auth-pages-routing.module';

@NgModule({
    declarations: [
        ComingSoonPageComponent,
        ErrorPageComponent,
        ForgotPasswordPageComponent,
        LockScreenPageComponent,
        LoginPageComponent,
        MaintenancePageComponent,
        RegisterPageComponent,
    ],
    imports: [
        CommonModule,
        AuthPagesRoutingModule,
        FormsModule,
        PipesModule
    ]
})
export class AuthPagesModule {
}
