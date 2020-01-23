import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {MaintenancePageComponent} from './maintenance/maintenance-page.component';
import {LoginPageComponent} from './login/login-page.component';
import {RegisterPageComponent} from './register/register-page.component';
import {ErrorPageComponent} from './error/error-page.component';
import {InvoicePageComponent} from './invoice-page.component';
import {AuthGuard} from '../../shared/auth/auth-guard.service';


const routes: Routes = [
    {
        path: 'maintenance',
        component: MaintenancePageComponent,
        data: { title: 'Under Maintenance' },
    },
    {
        path: 'login',
        component: LoginPageComponent,
        data: { title: 'Login' },
    },
    {
        path: 'register',
        component: RegisterPageComponent,
        data: { title: 'Register' },
    },
    {
        path: '404',
        component: ErrorPageComponent,
        data: { title: '404 Error' },
    },
    {
        path: 'invoice',
        component: InvoicePageComponent,
        data: { title: 'Invoice' },
        canActivate: [AuthGuard]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ContentPagesRoutingModule {
}
