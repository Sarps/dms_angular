import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ContentPagesRoutingModule } from './content-pages-routing.module';
import {MaintenancePageComponent} from './maintenance/maintenance-page.component';
import {ComingSoonPageComponent} from './coming-soon/coming-soon-page.component';
import {ErrorPageComponent} from './error/error-page.component';
import {ForgotPasswordPageComponent} from './forgot-password/forgot-password-page.component';
import {LockScreenPageComponent} from './lock-screen/lock-screen-page.component';
import {LoginPageComponent} from './login/login-page.component';
import {RegisterPageComponent} from './register/register-page.component';
import {InvoicePageComponent} from './invoice/invoice-page.component';
import {IdPadPipe} from '../../shared/pipes/id-pad.pipe';
import {PipesModule} from '../../shared/pipes/pipes.module';



@NgModule({
    imports: [
        CommonModule,
        ContentPagesRoutingModule,
        FormsModule,
        PipesModule
    ],
    declarations: [
        ComingSoonPageComponent,
        ErrorPageComponent,
        ForgotPasswordPageComponent,
        LockScreenPageComponent,
        LoginPageComponent,
        MaintenancePageComponent,
        RegisterPageComponent,
        InvoicePageComponent,
    ],
})
export class ContentPagesModule { }
